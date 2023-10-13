import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import { BlogProps } from "@/types";

const MainArticle = (props: any) => {
  return (
    <div className="grid col-span-2 text-start gap-4">
      <h1 className="text-3xl sm:text-4xl font-bold">{props.data.title}</h1>
      <h3 className="text-lg font-light">{props.data.subtitle}</h3>
      <h5 className="text-sm font-thin">{props.data.date}</h5>
      <ul>
        {props.data?.contents.map((content: string) => (
          <li key={content} className="text-xl my-2 ">
            {content}
          </li>
        ))}
      </ul>
      <Image
        src={props.data.featuredImage}
        width={1000}
        height={100}
        style={{ height: "500px" }}
        alt="img-blog"
      />
    </div>
  );
};

const LatestArticles = (props: any) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl lg:mx-0 py-4">
        <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
          Latest Article
        </h2>
      </div>
      <article className="grid grid-cols-3 gap-4 py-4 border-t">
        {props.data.map((blog: BlogProps) => (
          <Fragment key={blog.id}>
            <div className="col-span-1">
              <Image
                alt="img-blog"
                src={blog.featuredImage}
                width={300}
                height={300}
              />
            </div>
            <div className="col-span-2 flex flex-col justify-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.date} className="text-gray-500">
                  {blog.date}
                </time>
                <Link
                  href={`/category?categories=${blog.category.toLowerCase()}`}
                  className="relative z-9 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {blog.category}
                </Link>
              </div>
              <div className="group relative">
                <p className="text-base font-semibold line-clamp-2 leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${encodeURIComponent(blog.slug)}`}>
                    <span className="absolute inset-0" />
                    {blog.title}
                  </Link>
                </p>
                <p className="text-sm font-light line-clamp-2 leading-6 text-gray-900 group-hover:text-gray-600">
                  {blog.subtitle}
                </p>
              </div>
            </div>
          </Fragment>
        ))}
      </article>
    </div>
  );
};

const RelatedArticle = (props: any) => {
  return (
    <div className="bg-white pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
            Related article
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 mt-4 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {props.data.map((blog: BlogProps) => (
            <article
              key={blog.id}
              className="max-w-xl flex flex-col items-start justify-between">
              <Image
                src={blog.featuredImage}
                width={500}
                height={200}
                style={{ height: "250px" }}
                className="w-full rounded-lg"
                alt="image"
              />
              <div className="flex items-center gap-x-4 text-xs my-4">
                <time dateTime={blog.date} className="text-gray-500">
                  {blog.date}
                </time>
                <Link
                  href={`/category?categories=${blog.category.toLowerCase()}`}
                  className="relative z-9 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {blog.category}
                </Link>
              </div>
              <div className="group relative ">
                <h3 className="mt-3 text-lg line-clamp-1 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${encodeURIComponent(blog.slug)}`}>
                    <span className="absolute inset-0" />
                    {blog.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                  {blog.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export { MainArticle, LatestArticles, RelatedArticle };
