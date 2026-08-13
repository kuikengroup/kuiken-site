-- Idempotent repair for the existing private client-files admin upload policy.
-- This does not create a bucket or change any table contract.
drop policy if exists kg_client_files_admin_write on storage.objects;
create policy kg_client_files_admin_write
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'client-files'
  and public.is_admin()
  and (storage.foldername(name))[1] = 'clients'
);

-- Repair only the matching metadata-table permission used after Storage upload.
alter table public.files add column if not exists client_id uuid references public.clients(id) on delete cascade;
alter table public.files add column if not exists project_id uuid references public.projects(id) on delete set null;
alter table public.files add column if not exists uploaded_by uuid references public.profiles(id);
alter table public.files add column if not exists file_name text;
alter table public.files add column if not exists storage_path text;
alter table public.files add column if not exists file_size bigint;
alter table public.files add column if not exists mime_type text;
alter table public.files add column if not exists category text default 'other';
alter table public.files add column if not exists description text;
alter table public.files add column if not exists created_at timestamptz default now();
alter table public.files add column if not exists updated_at timestamptz default now();

grant select, insert, update, delete on table public.files to authenticated;

drop policy if exists files_admin on public.files;
create policy files_admin
on public.files
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- Ask PostgREST to immediately discover the repaired table contract.
notify pgrst, 'reload schema';
