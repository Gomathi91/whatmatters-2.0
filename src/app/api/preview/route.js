import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // If secret is invalid or missing slug, redirect to Home (published mode)
  if (secret !== "testing" || !slug) {
    redirect("/home");
    return;
  }

  // Valid secret
  redirect(`/home?preview=true&slug=${slug}`);
}
