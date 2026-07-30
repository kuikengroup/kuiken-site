import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "../../../lib/supabase/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: claims } = await supabase.auth.getClaims();
  if (!claims?.claims) return NextResponse.redirect(new URL("/login", request.url));

  const { data: file } = await supabase
    .from("files")
    .select("display_name,file_versions(storage_path,version)")
    .eq("id", id)
    .single();
  if (!file) return new NextResponse("Not found", { status: 404 });

  const versions = file.file_versions as { storage_path: string; version: number }[];
  const latest = [...versions].sort((a, b) => b.version - a.version)[0];
  if (!latest) return new NextResponse("Not found", { status: 404 });

  const download = request.nextUrl.searchParams.get("download") === "1";
  const { data, error } = await supabase.storage
    .from("project-files")
    .createSignedUrl(latest.storage_path, 60, download ? { download: file.display_name } : undefined);
  if (error || !data) return new NextResponse("Unable to open file", { status: 403 });
  return NextResponse.redirect(data.signedUrl);
}
