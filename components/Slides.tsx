import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    waitForAnimate: false,
  };
  return (
    <>
      <div className="h-[600px]">
        <div className="space-y-4 ml-[550px] p-5">
          <h1 className="text-lime-500 font-semibold font-inter text-lg text-center mr-[400px]">
            Real Solution,Real Fast!
          </h1>
          <h5 className="text-5xl font-semibold">
            Best Global Logistics Solutions.
          </h5>
        </div>
        <div className=" bg-slate-300 w-[1350px] h-[400px] relative ml-[210px] mt-10 rounded-2xl shadow-2xl shadow-slate-500">
          <div className="w-[1200px] absolute ml-20 mt-20">
            <Slider {...settings}>
              <div>
                <section className="flex">
                  <Image src={"/Air.jpg"} alt="Air" width={250} height={250} />
                  <div className="flex flex-col bg-slate-50 w-80 gap-2 pl-7 pt-8">
                    <h1 className="font-palanquin font-bold">
                      Air Freight Services
                    </h1>
                    <p className="sm:max-w-[250px] leading-norma text-sm">
                      At our Auto Service garage we are fully appreciate
                      howdifficult occur it is for people find
                    </p>
                    <button className="flex items-center gap-2 shadow-md rounded-sm w-48 h-10">
                      <FaArrowCircleRight size={30} className="pt-2" />
                      <h1 className="p-5">Read More</h1>
                    </button>
                  </div>
                </section>
              </div>
              <div>
                <section className="flex">
                  <Image
                    src={"/drone.jpeg"}
                    alt="Air"
                    width={250}
                    height={250}
                  />
                  <div className="flex flex-col bg-slate-50 w-80 gap-2 pl-7 pt-8">
                    <h1 className="font-palanquin font-bold">
                      Ocean Freight Services
                    </h1>
                    <p className="sm:max-w-[250px] leading-norma text-sm">
                      Ocean freight services involve shipping goods via sea
                      routes using cargo vessels, o ffering a cost-effective
                      solution for large-volume shipments over long distances.
                    </p>
                    <button className="flex items-center gap-2 shadow-md rounded-sm w-48 h-10">
                      <FaArrowCircleRight size={30} className="pt-2" />
                      <h1 className="p-5">Read More</h1>
                    </button>
                  </div>
                </section>
              </div>
              <div>
                <div>
                  <section className="flex">
                    <Image
                      src={"/Air.jpg"}
                      alt="Air"
                      width={250}
                      height={250}
                    />
                    <div className="flex flex-col bg-slate-50 w-80 gap-2 pl-7 pt-8">
                      <h1 className="font-palanquin font-bold">
                        Air Freight Services
                      </h1>
                      <p className="sm:max-w-[250px] leading-norma text-sm">
                        At our Auto Service garage we are fully appreciate
                        howdifficult occur it is for people find
                      </p>
                      <button className="flex items-center gap-2 shadow-md rounded-sm w-48 h-10">
                        <FaArrowCircleRight size={30} className="pt-2" />
                        <h1 className="p-5">Read More</h1>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
              <div>
                <div>
                  <section className="flex">
                    <Image
                      src={"/drone.jpeg"}
                      alt="Air"
                      width={250}
                      height={250}
                    />
                    <div className="flex flex-col bg-slate-50 w-80 gap-2 pl-7 pt-8">
                      <h1 className="font-palanquin font-bold">
                        Ocean Freight Services
                      </h1>
                      <p className="sm:max-w-[250px] leading-norma text-sm">
                        Ocean freight services involve shipping goods via sea
                        routes using cargo vessels, o ffering a cost-effective
                        solution for large-volume shipments over long distances.
                      </p>
                      <button className="flex items-center gap-2 shadow-md rounded-sm w-48 h-10">
                        <FaArrowCircleRight size={30} className="pt-2" />
                        <h1 className="p-5">Read More</h1>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
              <div>
                <div>
                  <section className="flex">
                    <Image
                      src={"/Air.jpg"}
                      alt="Air"
                      width={250}
                      height={250}
                    />
                    <div className="flex flex-col bg-slate-50 w-80 gap-2 pl-7 pt-8">
                      <h1 className="font-palanquin font-bold">
                        Air Freight Services
                      </h1>
                      <p className="sm:max-w-[250px] leading-norma text-sm">
                        At our Auto Service garage we are fully appreciate
                        howdifficult occur it is for people find
                      </p>
                      <button className="flex items-center gap-2 shadow-md rounded-sm w-48 h-10">
                        <FaArrowCircleRight size={30} className="pt-2" />
                        <h1 className="p-5">Read More</h1>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
              <div>
                <div>
                  <section className="flex">
                    <Image
                      src={"/drone.jpeg"}
                      alt="Air"
                      width={250}
                      height={250}
                    />
                    <div className="flex flex-col bg-slate-50 w-80 gap-2 pl-7 pt-8">
                      <h1 className="font-palanquin font-bold">
                        Ocean Freight Services
                      </h1>
                      <p className="sm:max-w-[250px] leading-norma text-sm">
                        Ocean freight services involve shipping goods via sea
                        routes using cargo vessels, o ffering a cost-effective
                        solution for large-volume shipments over long distances.
                      </p>
                      <button className="flex items-center gap-2 shadow-md rounded-sm w-48 h-10">
                        <FaArrowCircleRight size={30} className="pt-2" />
                        <h1 className="p-5">Read More</h1>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slides;
