import Image from "next/image";
import Link from "next/link";
interface ComponentProps {
  title: string;
  date: string;
  description: string;
  slug: string;
  imageSrc: string;
  tag: string;
}

const BlogCard = ({
  title,
  date,
  description,
  slug,
  imageSrc,
  tag,
}: ComponentProps) => {
  return (
    <article className="flex max-w-sm flex-col items-start justify-between">
      <Image
        src={imageSrc}
        alt=""
        width={2000}
        height={2000}
        className="rounded-lg bg-cover mb-3"
      />

      <div className="flex items-center gap-x-4 text-xs">
        <time className="text-gray-500">{date}</time>
        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          {tag}
        </span>
      </div>

      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`blog/${slug}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
