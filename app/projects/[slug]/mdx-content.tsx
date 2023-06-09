import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "rehype-figure";
import "highlight.js/styles/atom-one-dark.css";
import { JSX, ClassAttributes, OlHTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types";

const MdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6"
      {...props}
    >
      <strong>{props.children}</strong>
    </h1>
  ),

  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-6 text-xl leading-8 text-gray-600" {...props} />
  ),

  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="mb-1 text-xl leading-8 text-gray-600 ml-12" {...props}></li>
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-disc" {...props} />
  ),
  ol: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      OlHTMLAttributes<HTMLOListElement>
  ) => <ol className="list-decimal" {...props} />,

  figure: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      OlHTMLAttributes<HTMLOListElement>
  ) => (
    <figure className="relative rehype-figure flex flex-col self-center mb-6">
      {props.children}
    </figure>
  ),

  figcaption: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      OlHTMLAttributes<HTMLOListElement>
  ) => (
    <figcaption className="italic text-base text-gray-600 ml-6">
      {props.children}
    </figcaption>
  ),

  img: ({
    src,
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
      className="rounded-lg bg-cover aspect-video"
    />
  ),

  code: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      OlHTMLAttributes<HTMLOListElement>
  ) => <code className={`${props.className} my-6`}>{props.children}</code>,
} as MDXComponents;

const MdxContent = ({ source }: { source: string }) => {
  return (
    <MDXRemote
      source={source}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behaviour: "wrap" }],
            rehypeHighlight,
            rehypeFigure,
          ],
        },
      }}
      components={MdxComponents}
    />
  );
};

export default MdxContent;
