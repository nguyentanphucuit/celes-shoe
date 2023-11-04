import { useAppSelector } from "@/redux/hooks";
import {
  LatestArticles,
  MainArticle,
  RelatedArticle,
} from "@/components/blog/BlogComp";
import { GetStaticPropsContext } from "next";

const Blog = () => {
  const data = useAppSelector((state) => state.blogReducer.items);
  return (
    <div className="my-32 lg:mt-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <MainArticle data={data[0]} />
        <LatestArticles data={data} />
      </div>
      <RelatedArticle data={data} />
    </div>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default Blog;
