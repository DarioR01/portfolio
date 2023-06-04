import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/atom-one-dark.css";
import { JSX, ClassAttributes, OlHTMLAttributes } from "react";

const MdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="h1 display-5 mb-3" {...props}>
      <strong>{props.children}</strong>
    </h1>
  ),

  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-3 blockquote" {...props} />
  ),

  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="ms-5 blockquote ml-5" {...props}></li>
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="mb-3" {...props} />
  ),
  ol: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      OlHTMLAttributes<HTMLOListElement>
  ) => <ol className="mb-3" {...props} />,

  img: ({
    src,
    srcset,
    loading,
    width,
    height,
    alt,
  }: {
    src: string;
    srcset: string;
    loading: string;
    width: number;
    height: number;
    alt: string;
  }) => (
    <Image
      src={src}
      width={width || 1000}
      height={height || 1000}
      alt={alt}
      className="img-fluid"
    />
  ),
};

const MdxContent = ({ source }: { source: string }) => {
  return (
    /* @ts-expect-error Async Server Component */
    <MDXRemote
      source={source}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behaviour: "wrap" }],
            rehypeHighlight,
          ],
        },
      }}
      components={MdxComponents}
    />
  );
};

export default MdxContent;
