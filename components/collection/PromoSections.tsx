import { classNames } from "@/constants/common";
import Image from "next/image";
import React from "react";

const PromoSections = () => {
  const listImgPromo = [
    [
      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-16.jpg?alt=media&token=4749ca07-3fcb-4083-b1f5-cd1cf91d0153&_gl=1*nrumoj*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTE3MjQ0OC4zOC4xLjE2OTkxNzI0NTguNTAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-17.jpg?alt=media&token=b4af70e4-fc43-44d6-8137-9992cc5842de&_gl=1*kz90og*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTE3MjQ0OC4zOC4xLjE2OTkxNzI0NzkuMjkuMC4w",
    ],
    [
      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-18.jpg?alt=media&token=5aa95feb-4913-4425-99e9-fa4795ab2637&_gl=1*zpw9jf*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTE3MjQ0OC4zOC4xLjE2OTkxNzI0OTMuMTUuMC4w",

      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-19.jpg?alt=media&token=57925677-3a9a-4c32-9ce6-c05513c977e1&_gl=1*9kb88x*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTE3MjQ0OC4zOC4xLjE2OTkxNzI1MDMuNS4wLjA.",

      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-2.jpg?alt=media&token=f61cd563-8c94-4cd6-97a1-bd433d78803f&_gl=1*qi5bg0*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTE3MjQ0OC4zOC4xLjE2OTkxNzI1MTMuNjAuMC4w",
    ],
    [
      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-20.jpg?alt=media&token=df7eaf72-5275-4b35-b2e9-c988f3626579&_gl=1*13drxyr*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTE3MjQ0OC4zOC4xLjE2OTkxNzI1MjQuNDkuMC4w",

      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-21.jpg?alt=media&token=375637cf-6973-48e9-b10f-af69cafb0f7b&_gl=1*3yo6d2*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTE3MjQ0OC4zOC4xLjE2OTkxNzI1MzguMzUuMC4w",
    ],
  ];

  const promoSections = {
    title: "Summer styles are finally here",
    subtitle:
      "This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.",
  };
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {promoSections.title}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {promoSections.subtitle}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {listImgPromo.map((listImg, listImgIdx) => (
                      <div
                        key={listImgIdx}
                        className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {listImg.map((img, imgIdx) => (
                          <div
                            key={img + imgIdx}
                            className={classNames(
                              imgIdx === 0 && "sm:opacity-0 lg:opacity-100",
                              "h-64 w-44 overflow-hidden rounded-lg"
                            )}>
                            <Image
                              src={img}
                              alt={img}
                              width={176}
                              height={256}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSections;
