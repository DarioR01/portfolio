import { getAllPosts } from "@/util/getPosts";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(request: Request) {
  const posts = await getAllPosts();

  const siteMap = posts.map(({ frontmatter }) => {
    return {
      loc: `${process.env.SITE_URL}/projects/${frontmatter.slug}.xml`,
      lastmod: new Date().toISOString(),
    };
  });

  return getServerSideSitemap(siteMap);
}
