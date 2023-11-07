import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks";
import {
  LatestArticles,
  MainArticle,
  RelatedArticle,
} from "@/components/blog/BlogComp";
import { listBlogs } from "@/constants";
export function generateStaticParams() {
  // const posts = await fetch("https://.../posts").then((res) => res.json());
  const blogs = listBlogs.map((blog) => ({
    slug: blog.title.toLowerCase().replace(/ /g, "-"),
  }));
  return [...blogs];
}

const Blog = ({ params }: { params: { slug: string } }) => {
  const data = [...listBlogs];

  const mainData = data.find((blog) => blog.slug == params.slug) ?? data[0];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <MainArticle data={mainData} />
        <LatestArticles data={data} />
      </div>
      <RelatedArticle data={data} />
    </div>
  );
};

export default Blog;
