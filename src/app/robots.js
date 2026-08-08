export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://andizogaj.vercel.app";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
