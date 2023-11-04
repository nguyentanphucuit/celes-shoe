import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  // const t = useTranslations("About");
  return <div className="mt-32">About us</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default About;
