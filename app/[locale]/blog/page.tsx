import {
  MainArticle,
  LatestArticles,
  RelatedArticle,
} from "@/components/blog/BlogComp";
import { listBlogs } from "@/constants";
import React from "react";

const Blog = () => {
  const data = [...listBlogs];
  const mainData = listBlogs[0];
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
