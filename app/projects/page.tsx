import { getAllPosts } from "../../util/getPosts";
import BlogList from "../../components/BlogList";
import Layout from "@/layouts/Navbar/layout";

const Projects = async () => {
  const posts = await getAllPosts();

  return (
    <Layout>
      <main className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-5">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            This is My Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            See my storm of ideas.
          </p>
        </div>
        <BlogList posts={posts} />
      </main>
    </Layout>
  );
};

export default Projects;
