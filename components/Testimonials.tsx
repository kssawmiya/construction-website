import React, { useState } from "react";
import Image from "next/image";
import ChooseButton from "./ChooseButton";

const slidesData = [
  {
    title: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR",
    description:
      " This is the paragraph about trusted clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tellus quis ante pharetra interdum. Nullam ac sapien ac felis consequat vestibulum. Donec id justo nec libero hendrerit accumsan. Nulla facilisi. Integer congue velit et mi suscipit, sit amet blandit turpis efficitur.",
  },
  {
    title: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR",
    description:
      "Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    let newSlideIndex = currentSlide + 1;
    if (newSlideIndex >= slidesData.length) newSlideIndex = 0;
    setCurrentSlide(newSlideIndex);
  };

  return (
    <>
      <section className="flex items-center h-screen">
        <div className="slider-container" onClick={goToNextSlide}>
          <div className="relative flex flex-col left-32">
            <div className="pb-80 space-y-5">
              <h1 className="text-black text-2xl font-bold pl-20 font-sans">
                TRUSTED CLIENTS
              </h1>
              <p className="text-xl font-mono text-slate-600 font-semibold pl-20 tracking-[5px]">
                {slidesData[currentSlide].title}
              </p>

              <div className="sm:max-w-[400px] pl-20 pt-5">
                <div className="w-12 h-12 bg-red-800 translate-y-24">
                  <h1 className="text-white text-5xl flex justify-center pt-2">
                    "
                  </h1>
                </div>
                <p className="bg-slate-300 h-44 pl-16 flex items-center w-[600px]">
                  {slidesData[currentSlide].description}
                </p>
              </div>

              <div className="pl-20 pt-5">
                <button className="bg-yellow-500  text-white flex justify-center items-center px-10 py-4 border font-montserrat text-lg leading-none">
                  {currentSlide + 1}/{slidesData.length}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-[200px] pr-[200px] space-y-5">
          <h2 className="text-black text-2xl font-bold font-sans">
            WHY CHOOSE US
          </h2>
          <p className="text-xl font-mono text-slate-600 font-semibold tracking-[4px] w-[400px]">
            LOREM IPSUM DOLOR SIT AMIT
          </p>

          <div>
            <ChooseButton lable="Dui ac hendreit elementum quam ipsum auctor lorem." />
            <ChooseButton lable="Manris vei magna e est lobortis volutpat." />
            <ChooseButton lable="sed bibendum ornare lorem mauris feugiat." />
            <ChooseButton lable="Nulla scelerisque dul hendrit elementum quam." />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
