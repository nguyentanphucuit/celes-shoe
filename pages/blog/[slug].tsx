import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks";
import {
  LatestArticles,
  MainArticle,
  RelatedArticle,
} from "@/components/blog/BlogComp";

const Blog = () => {
  const router = useRouter();
  const data = useAppSelector((state) => state.blogReducer.items);
  const mainData =
    data.find((blog) => blog.slug == router.query.slug) ?? data[0];
  return (
    <div className="my-32 lg:mt-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <MainArticle data={mainData} />
        <LatestArticles data={data} />
      </div>
      <RelatedArticle data={data} />
    </div>
  );
};

export default Blog;
