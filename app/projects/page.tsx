import { getAllPosts } from "../../util/getPosts";
import BlogList from "../../components/BlogList";
import Layout from "@/layouts/Navbar/layout";

const Projects = async () => {
  const posts = await getAllPosts();

  return (
    <Layout>
      <main className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-5">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            These Are My Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-justify">
            Welcome to my projects navigation page! Here you will find a list of
            all the projects I have worked on over the years, both for
            educational and personal purposes. If you are interested in my
            professional projects, please visit my about page. I am always
            looking for new challenges, so if you have any ideas for projects
            you would like to see me work on, please Contact Me!
          </p>
        </div>
        {posts.length === 0 ? (
          <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mt-8">
            COMING UP SOON!!!
          </h2>
        ) : (
          <BlogList posts={posts} />
        )}
      </main>
    </Layout>
  );
};

export default Projects;
