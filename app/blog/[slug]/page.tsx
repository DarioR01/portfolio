import { getPostFromSlug } from "../../../util/getPosts";
import MdxContent from "./mdx-content";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params as { slug: string };
  const { serialized } = await getPostFromSlug(slug);

  return (
    <div className="container-sm mt-5">
      <MdxContent source={serialized} />
    </div>
  );
};

export default PostPage;
