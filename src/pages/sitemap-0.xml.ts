import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { subjectSlug } from "../site.config";

const origin = "https://www.edukacyjny.info";

export const GET: APIRoute = async () => {
  const posts = await getCollection("lekcje");
  const cats = [...new Set(posts.map((p) => p.data.category).filter(Boolean))] as string[];
  const pages = ["/", "/lekcje/", "/przedmioty/", "/o-portalu/", "/kontakt/", "/polityka-prywatnosci/", "/regulamin/"];
  const urls = [
    ...pages.map((p) => `${origin}${p}`),
    ...cats.map((c) => `${origin}/przedmioty/${subjectSlug(c)}/`),
    ...posts.map((p) => `${origin}/lekcje/${p.slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
