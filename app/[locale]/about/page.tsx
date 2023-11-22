import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const About = () => {
  // const t = useTranslations("About");
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 l:px-8 ">
      <div className="grid grid-cols-5 gap-20">
        <div className="col-span-3">
          <Image
            src="/about-us.png"
            width={1000}
            height={100}
            alt="about us"
            className="object-contain"
          />
        </div>
        <div className="col-span-2 space-y-4">
          <p className="text-base font-medium text-primary">Our track record</p>
          <h5 className="text-4xl font-bold">
            Trusted by thousands of creators worldwide
          </h5>
          <p className="py-4 pb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
          <OurTrackRecord />
        </div>
      </div>
      <blockquote>
        <p className="mx-auto text-center py-8 text-gray-500 italic">
          &quot;So start browsing today and find the perfect products to suit
          your needs!&quot;
        </p>
      </blockquote>
    </div>
  );
};

const OurTrackRecord = () => {
  const ourTrackRecordData = [
    {
      title: "750+",
      subtitle: "Happy Customers",
    },
    {
      title: "2023",
      subtitle: "Founding Year",
    },
    {
      title: "120+",
      subtitle: "Product Orders",
    },
    {
      title: "60+",
      subtitle: "Quality Products",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-6">
      {ourTrackRecordData.map((data) => (
        <div key={data.title} className="border-l px-6 space-y-4">
          <p className="text-3xl font-bold text-blue-600">{data.title}</p>
          <p className="text-sm">{data.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
