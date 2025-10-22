import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  const PREVIEW_SECRET = process.env.CONTENTFUL_PREVIEW_SECRET

  // If secret is invalid or missing slug, redirect to Home (published mode)
  if (secret !== PREVIEW_SECRET || !slug) {
    redirect("/");
    return;
  }

  // Valid secret
  redirect(`/${slug}?preview=true&slug=${slug}`);
}
