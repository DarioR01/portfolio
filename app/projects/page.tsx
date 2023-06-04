import { getAllPosts } from "../../util/getPosts";
import BlogList from "../../components/BlogList";

const Projects = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <h1>Projects</h1>
    </>
  );
};

export default Projects;
