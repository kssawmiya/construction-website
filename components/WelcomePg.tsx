import Image from "next/image";
import React from "react";

const WelcomePg = () => {
  return (
    <section className="flex items-center mt-[200px] h-screen">
      <div className="flex-1 relative mt-44">
        <div className="relative ml-24">
          <div className="relative">
            <Image
              src={"/welcome2.jpg"}
              alt="workers image"
              width={500}
              height={100}
              className="pl-5 ml-48"
            />
          </div>
          <div className="relative">
            <Image
              src={"/welcome1.jpg"}
              alt="workers image"
              width={400}
              height={50}
              className="pl-5 mr-11 translate-x-18 -translate-y-72"
            />
            <div className="left-[-119px] bottom-[340px] absolute">
              <Image
                src={"/parel.png"}
                alt="parelleloram"
                width={300}
                height={250}
              />
            </div>
            <div className="left-[-20px] top-[10px] absolute">
              <Image
                src={"/triangle.png"}
                alt="triangle"
                width={200}
                height={250}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={"/message.png"}
              alt="message"
              width={400}
              height={250}
              className="bottam-5 absolute top-[300px] left-[540px]"
            />
            <div className="absolute top-[460px] left-[675px] flex flex-col py-6 items-center">
              <h1 className="font-semibold text-4xl">15,350+</h1>
              <span className="whitespace-nowrap font-bold ">
                Clients world wide
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col mb-[470px] ml-[400px] mt-56">
        <h2 className="text-5xl font-palanquin font-bold text-slate-gray leading-tight">
          Trans Manx Logistics <br></br> Around{" "}
          <span className="text-orange-900">the World</span>
        </h2>

        <p className="mt-4 info-text sm:max-w-[500px] leading-normal">
          Transmax is the world's leading global logistics provider. We support
          industry and trade in the global exchange of goods through land
          transport.
        </p>
        <p className="mt-6 info-text sm:max-w-[500px] leading-normal">
          Our value-added services ensure the flow of goods continues smoothly
          and supply chains remain lean and streamlined for success.
        </p>
        <br></br>
        <br></br>
        <div>
          <button className="bg-slate-300 text-sky-900 px-10 py-4 border font-montserrat text-lg leading-none">
            <span className="whitespace-nowrap font-bold">MORE ABOUT US</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomePg;
