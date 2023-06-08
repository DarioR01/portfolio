import path from "path";
import fs from "fs";
import { globSync } from "glob";
import { compileMDX } from "next-mdx-remote/rsc";
export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  slug: string;
  tag: string;
};
export type Post<TFrontmatter> = {
  serialized: string;
  frontmatter: TFrontmatter;
};
const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = (): string[] => {
  const paths = globSync(`${POSTS_PATH}/*.mdx`);
  return paths.map((path): string => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
};
export const getPostFromSlug = async (
  slug: string
): Promise<Post<Frontmatter>> => {
  const postPath = `${POSTS_PATH}/${slug}.mdx`;
  const raw = fs.readFileSync(postPath, "utf8");

  const { frontmatter } = await compileMDX<{
    title: string;
    description: string;
    date: string;
    coverImage: string;
    slug: string;
    tag: string;
  }>({
    source: raw,
    options: { parseFrontmatter: true },
  });
  return {
    frontmatter,
    serialized: raw,
  };
};
export const getAllPosts = async (): Promise<Post<Frontmatter>[]> => {
  const slugs = getSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => getPostFromSlug(slug))
  );
  return posts;
};
