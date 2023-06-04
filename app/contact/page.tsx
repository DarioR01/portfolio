import { getAllPosts } from "../../util/getPosts";
import BlogList from "../../components/BlogList";

const Contact = async () => {
  const posts = await getAllPosts();

  return <h1>Contact</h1>;
};

export default Contact;
