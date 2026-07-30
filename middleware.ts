import type { NextRequest } from "next/server";
import { updateSession } from "./app/lib/supabase/proxy";

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: ["/portal/:path*", "/login"],
};
