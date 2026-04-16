import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const token =
    req.headers.get("x-revalidate-token") ||
    new URL(req.url).searchParams.get("token");
  if (!token || token !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  let body: any = {};
  try {
    body = await req.json();
  } catch (e) {
    // empty body okay
  }

  const paths: string[] = Array.isArray(body?.paths)
    ? body.paths
    : body?.path
      ? [body.path]
      : ["/"];

  for (const p of paths) {
    try {
      revalidatePath(p);
    } catch (err) {
      // ignore per-path errors
      console.warn("Failed to revalidate", p, err);
    }
  }

  return NextResponse.json({ revalidated: true, paths });
}
