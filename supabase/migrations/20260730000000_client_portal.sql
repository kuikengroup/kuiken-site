create type public.portal_role as enum ('ADMIN','CLIENT');
create type public.project_status as enum ('PLANNING','ACTIVE','REVIEW','COMPLETE','ON_HOLD');
create schema if not exists private;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null default '',
  full_name text not null default '',
  company text not null default '',
  role public.portal_role not null default 'CLIENT',
  disabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.projects (
  id uuid primary key default gen_random_uuid(), name text not null, description text not null default '',
  status public.project_status not null default 'PLANNING', start_date date, due_date date,
  created_by uuid not null references public.profiles(id), created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.project_members (
  project_id uuid references public.projects(id) on delete cascade, profile_id uuid references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(), primary key(project_id,profile_id)
);
create table public.deliverables (
  id uuid primary key default gen_random_uuid(), project_id uuid not null references public.projects(id) on delete cascade,
  title text not null, status text not null default 'Planned', due_date date, position integer not null default 0
);
create table public.project_notes (
  id uuid primary key default gen_random_uuid(), project_id uuid not null references public.projects(id) on delete cascade,
  body text not null, internal boolean not null default false, created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now()
);
create table public.folders (
  id uuid primary key default gen_random_uuid(), project_id uuid not null references public.projects(id) on delete cascade,
  parent_id uuid, name text not null, created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(), unique(project_id,parent_id,name), unique(id,project_id),
  foreign key(parent_id,project_id) references public.folders(id,project_id) on delete cascade
);
create table public.files (
  id uuid primary key default gen_random_uuid(), project_id uuid not null references public.projects(id) on delete cascade,
  folder_id uuid, display_name text not null, mime_type text not null,
  size_bytes bigint not null check(size_bytes >= 0), uploaded_by uuid not null references public.profiles(id),
  current_version integer not null default 1, created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  foreign key(folder_id,project_id) references public.folders(id,project_id) on delete set null (folder_id)
);
create table public.file_versions (
  id uuid primary key default gen_random_uuid(), file_id uuid not null references public.files(id) on delete cascade,
  version integer not null, storage_path text not null unique, size_bytes bigint not null, mime_type text not null,
  uploaded_by uuid not null references public.profiles(id), created_at timestamptz not null default now(), unique(file_id,version)
);
create table public.activity_log (
  id bigint generated always as identity primary key, project_id uuid references public.projects(id) on delete cascade,
  actor_id uuid references public.profiles(id) on delete set null, action text not null, details jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index on public.project_members(profile_id,project_id);
create index on public.files(project_id,folder_id,updated_at desc);
create index on public.activity_log(project_id,created_at desc);

create or replace function private.is_admin() returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.profiles where id=(select auth.uid()) and role='ADMIN' and not disabled)
$$;
create or replace function private.can_access_project(target uuid) returns boolean language sql stable security definer set search_path='' as $$
  select private.is_admin() or exists(select 1 from public.project_members where project_id=target and profile_id=(select auth.uid()))
$$;
revoke all on function private.is_admin() from public;
revoke all on function private.can_access_project(uuid) from public;
grant execute on function private.is_admin(), private.can_access_project(uuid) to authenticated;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path='' as $$
begin insert into public.profiles(id,email,full_name,company) values(new.id,coalesce(new.email,''),coalesce(new.raw_user_meta_data->>'full_name',''),coalesce(new.raw_user_meta_data->>'company','')); return new; end $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security; alter table public.projects enable row level security;
alter table public.project_members enable row level security; alter table public.deliverables enable row level security;
alter table public.project_notes enable row level security; alter table public.folders enable row level security;
alter table public.files enable row level security; alter table public.file_versions enable row level security;
alter table public.activity_log enable row level security;

create policy profiles_read on public.profiles for select to authenticated using(id=(select auth.uid()) or private.is_admin());
create policy profiles_admin on public.profiles for update to authenticated using(private.is_admin()) with check(private.is_admin());
create policy projects_read on public.projects for select to authenticated using(private.can_access_project(id));
create policy projects_admin on public.projects for all to authenticated using(private.is_admin()) with check(private.is_admin());
create policy members_read on public.project_members for select to authenticated using(private.can_access_project(project_id));
create policy members_admin on public.project_members for all to authenticated using(private.is_admin()) with check(private.is_admin());
create policy deliverables_read on public.deliverables for select to authenticated using(private.can_access_project(project_id));
create policy deliverables_admin on public.deliverables for all to authenticated using(private.is_admin()) with check(private.is_admin());
create policy notes_read on public.project_notes for select to authenticated using(private.can_access_project(project_id) and (not internal or private.is_admin()));
create policy notes_admin on public.project_notes for all to authenticated using(private.is_admin()) with check(private.is_admin());
create policy folders_read on public.folders for select to authenticated using(private.can_access_project(project_id));
create policy folders_write on public.folders for all to authenticated using(private.can_access_project(project_id)) with check(private.can_access_project(project_id) and (created_by=(select auth.uid()) or private.is_admin()));
create policy files_read on public.files for select to authenticated using(private.can_access_project(project_id));
create policy files_write on public.files for all to authenticated using(private.can_access_project(project_id)) with check(private.can_access_project(project_id) and (uploaded_by=(select auth.uid()) or private.is_admin()));
create policy versions_read on public.file_versions for select to authenticated using(exists(select 1 from public.files f where f.id=file_id and private.can_access_project(f.project_id)));
create policy versions_write on public.file_versions for all to authenticated using(exists(select 1 from public.files f where f.id=file_id and private.can_access_project(f.project_id))) with check(exists(select 1 from public.files f where f.id=file_id and private.can_access_project(f.project_id)));
create policy activity_read on public.activity_log for select to authenticated using(project_id is null and private.is_admin() or private.can_access_project(project_id));
create policy activity_add on public.activity_log for insert to authenticated with check(actor_id=(select auth.uid()) and (project_id is null and private.is_admin() or private.can_access_project(project_id)));

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values(
 'project-files','project-files',false,52428800,
 array['application/pdf','image/png','image/jpeg','image/svg+xml','application/postscript','image/vnd.adobe.photoshop','application/zip','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
) on conflict(id) do update set
  public=false,
  file_size_limit=excluded.file_size_limit,
  allowed_mime_types=excluded.allowed_mime_types;
create policy portal_storage_read on storage.objects for select to authenticated using(bucket_id='project-files' and private.can_access_project(((storage.foldername(name))[1])::uuid));
create policy portal_storage_add on storage.objects for insert to authenticated with check(bucket_id='project-files' and private.can_access_project(((storage.foldername(name))[1])::uuid));
create policy portal_storage_update on storage.objects for update to authenticated using(bucket_id='project-files' and private.can_access_project(((storage.foldername(name))[1])::uuid));
create policy portal_storage_delete on storage.objects for delete to authenticated using(bucket_id='project-files' and private.can_access_project(((storage.foldername(name))[1])::uuid));
