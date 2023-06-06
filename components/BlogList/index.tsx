import { Post, Frontmatter } from "../../util/getPosts";
import BlogCard from "../BlogCard";

const BlogList = ({ posts }: { posts: Post<Frontmatter>[] }) => {
  return (
    <ul className="list-unstyled mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => {
        const { frontmatter } = post;
        return (
          <li key={frontmatter.slug} className="mb-5">
            <BlogCard
              title={frontmatter.title}
              date={frontmatter.date}
              description={frontmatter.description}
              slug={frontmatter.slug}
              imageSrc={frontmatter.coverImage}
              tag={frontmatter.tag}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogList;
