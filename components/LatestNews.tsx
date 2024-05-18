import React from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Date from "./Date";

const LatestNews = () => {
  return (
    <>
      <div className="h-9 w-[300px] mt-[150px] ml-[750px] text-center">
        <h1 className="text-2xl font-sans font-bold ml-10 flex items-center text-slate-600">
          LATEST NEWS
        </h1>
      </div>
      <div className="flex ml-72 mt-9">
        <div className="ml-7 space-y-5">
          <section className="flex">
            <div className="flex">
              <Date date="26" />
              <Image src={"/Air.jpg"} alt="Air" width={200} height={200} />
            </div>
            <div className="flex flex-col bg-cyan-600 w-[300px] gap-2 pl-7 pt-8">
              <h1 className="font-palanquin font-bold text-white">
                CURABITUR LOREMUISM QUIS
              </h1>

              <p className="text-white text-xs font-bold">Admin</p>
              <p className="sm:max-w-[250px] leading-norma text-sm text-white">
                Pelientesque habitant morbi tristique sene ctus edt netus eft
                malesuada frame...
              </p>
            </div>
          </section>

          <section className="flex">
            <div className="flex">
              <Date date="20" />
              <Image src={"/drone.jpeg"} alt="Air" width={200} height={200} />
            </div>
            <div className="flex flex-col bg-slate-50 w-80 gap-2 pl-7 pt-8">
              <h1 className="font-palanquin font-bold">
                {" "}
                CURABITUR LOREMUISM QUIS
              </h1>
              <p className="text-xs font-bold">Admin</p>
              <p className="sm:max-w-[250px] leading-norma text-sm">
                Pelientesque habitant morbi tristique sene ctus edt netus eft
                malesuada frame...
              </p>
            </div>
          </section>
        </div>
        <div className="ml-7 space-y-5">
          <section className="flex">
            <div className="flex">
              <Date date="22" />
              <Image
                src={"/Contain2.jpeg"}
                alt="Air"
                width={200}
                height={350}
              />
            </div>
            <div className="flex flex-col bg-cyan-600 w-[300px] gap-2 pl-7 pt-8">
              <h1 className="font-palanquin font-bold text-white">
                CURABITUR LOREMUISM QUIS
              </h1>
              <p className="text-white text-xs font-bold">Admin</p>
              <p className="sm:max-w-[250px] leading-norma text-sm text-white">
                Pelientesque habitant morbi tristique sene ctus edt netus eft
                malesuada frame...
              </p>
            </div>
          </section>

          <section className="flex">
            <div className="flex">
              <Date date="15" />
              <Image
                src={"/Contain1.jpeg"}
                alt="Air"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col bg-slate-50 w-80 gap-2 pl-7 pt-8">
              <h1 className="font-palanquin font-bold">
                CURABITUR LOREMUISM QUIS
              </h1>
              <p className="text-xs font-bold">Admin</p>
              <p className="sm:max-w-[250px] leading-norma text-sm">
                Pelientesque habitant morbi tristique sene ctus edt netus eft
                malesuada frame...
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
