export async function GET() {
  const isProd = process.env.NODE_ENV === "production";

  const content = isProd
    ? `User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml`
    : `User-agent: *
Disallow: /`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
