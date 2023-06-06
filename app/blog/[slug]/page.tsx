import { getPostFromSlug } from "../../../util/getPosts";
import MdxContent from "./mdx-content";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params as { slug: string };
  const { serialized } = await getPostFromSlug(slug);

  return (
    <div className="container mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 mt-12 flex flex-col">
      <MdxContent source={serialized} />
    </div>
  );
};

export default PostPage;
