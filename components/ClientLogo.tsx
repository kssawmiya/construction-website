import Image from "next/image";
import React from "react";

const ClientLogo = () => {
  return (
    <>
      <div className="flex flex-row gap-11 ml-44 mt-[-100px]">
        <div className="shadow-lg shadow-black">
          <Image src={"/logo2.jpeg"} width={300} height={50} alt="logo1" />
        </div>
        <div className="shadow-lg shadow-black">
          <Image src={"/logo3.jpeg"} width={300} height={50} alt="logo1" />
        </div>
        <div className="shadow-lg shadow-black">
          <Image src={"/logo4.jpeg"} width={300} height={50} alt="logo1" />
        </div>
        <div className="shadow-lg shadow-black">
          <Image src={"/logo5.jpeg"} width={300} height={50} alt="logo1" />
        </div>
      </div>
    </>
  );
};

export default ClientLogo;
