import { getAllPosts } from "../../util/getPosts";
import BlogList from "../../components/BlogList";
import Container from "react-bootstrap/Container";

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <main className="container">
        <h1 className="h1 display-1 my-5">
          <strong>Blog Posts</strong>
        </h1>
        <BlogList posts={posts} />
      </main>
    </>
  );
};

export default Blog;
