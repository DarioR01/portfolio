import Link from "next/link";

interface ComponentProps {
  title: string;
  date: string;
  description: string;
  slug: string;
  imageSrc: string;
}

const BlogCard = ({
  title,
  date,
  description,
  slug,
  imageSrc,
}: ComponentProps) => {
  return <div>Card again ;-;</div>;
};

export default BlogCard;
