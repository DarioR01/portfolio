"use client";

import { Post, Frontmatter } from "../../util/getPosts";
import BlogCard from "../BlogCard";
import Container from "react-bootstrap/Container";

const BlogList = ({ posts }: { posts: Post<Frontmatter>[] }) => {
  return (
    <Container fluid="lg">
      <ul className="list-unstyled">
        {posts.map((post) => {
          const { frontmatter, serialized } = post;
          return (
            <li key={frontmatter.slug} className="mb-5">
              <BlogCard
                title={frontmatter.title}
                date={frontmatter.date}
                description={frontmatter.description}
                slug={frontmatter.slug}
                imageSrc={frontmatter.coverImage}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default BlogList;
