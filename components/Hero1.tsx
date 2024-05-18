"use client";

import React, { useState } from "react";

const slidesData = [
  {
    title: "LOGISTIC",
    subtitle: "Best Shipping",
    subtitile1: "Partner",
    description:
      " Amet,tempus equestas facilisis volutpat molestie lobortis posuere maecenas.",
    imageUrl:
      "https://ushamartin.com/upload/products/20210902132727_crane-rope-slider-img-4.jpg",
    buttonText: "DISCOVER MORE",
  },
  {
    title: "LOGISTIC",
    subtitle: "Best Shipping",
    subtitile1: "Partner",
    description:
      "Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas.",
    imageUrl:
      "https://www.shutterstock.com/image-photo/construction-cranes-building-house-against-600nw-2098269895.jpg",
    buttonText: "DISCOVER MORE",
  },
];

const Hero1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    let newSlideIndex = currentSlide + 1;
    if (newSlideIndex >= slidesData.length) newSlideIndex = 0;
    setCurrentSlide(newSlideIndex);
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container p-2 mt-[140px]"
    >
      <div className="slider-container" onClick={goToNextSlide}>
        <div className="slide">
          <div className="relative flex flex-col justify-center items-start w-[600px] max-xl:padding-x pt-14 bg-white left-14">
            <div className="flex gap-2">
              <span className="text-yellow-500 font-bold">|</span>
              <p className="text-xl font-mono text-black font-semibold">
                {slidesData[currentSlide].title}
              </p>
            </div>
            <h1 className="mt-10 font-mono text-7xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-slate-gray">
              <span className="xl:whitespace-nowrap relative bottom-1">
                {slidesData[currentSlide].subtitle}
              </span>
              <br />
              <span className=" text-yellow-500  inline-block mt-3">
                {slidesData[currentSlide].subtitile1}
              </span>
            </h1>
            <p className="font-mono text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-[400px]">
              {slidesData[currentSlide].description}
            </p>
            <button className="bg-yellow-500  text-white flex justify-center items-center px-10 py-4 border font-montserrat text-lg leading-none">
              {slidesData[currentSlide].buttonText}
            </button>
          </div>
          <div className="mt-5">
            <img
              src={slidesData[currentSlide].imageUrl}
              alt={slidesData[currentSlide].title}
              width={950}
              height={200}
            />
          </div>
        </div>
        <div className="mt-3">
          <button className="bg-yellow-500  text-white flex justify-center items-center px-10 py-4 border font-montserrat text-lg leading-none">
            {currentSlide + 1}/{slidesData.length}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
