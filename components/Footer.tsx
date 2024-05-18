import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { link } from "fs";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white mt-2 justify-center border-t border-black-100 bg-gray-500  pt-3 h-112">
      <div className="flex justify-center items-start gap-6 py-1">
        <div className="flex flex-row justify-between gap-96">
          <div>
            <h3 className="text-3xl font-bold mb-5">Weekly Newsletter</h3>
            <p>There are many vaiations of passages of lorem ipsum available</p>
          </div>

          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your Mail"
              className="w-80 h-12 pl-2 border border-gray-300 rounded placeholder-black text-left"
            />
            <button className="bg-yellow-500 text-white w-40 h-12 rounded">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start gap-20 py-20">
        <div className="w-60">
          <h3 className="text-2xl font-bold mb-5">About Us</h3>
          <hr
            style={{
              borderTop: "2px dashed #FFFF00",
              width: "25%",
              margin: "0 0",
            }}
          />
          <p className="text-sm mt-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-3 mt-5">
            <img src="dialer.png" alt="Image 1" className="w-4 h-4" />
            <p className="text-sm">| &nbsp; (+94) 11 434 7575 </p>
          </div>
          <div className="flex gap-3 mt-5">
            <img src="location.png" alt="Image 1" className="w-4 h-4" />
            <p className="text-sm">| &nbsp; 42, Lily Ave, Colombo 00600 </p>
          </div>
        </div>
        <div className="w-60">
          <h3 className="text-2xl font-bold mb-5">Latest News</h3>
          <hr
            style={{
              borderTop: "2px dashed #FFFF00",
              width: "35%",
              margin: "0 0",
            }}
          />
          <ul className="list-none custom-list">
            <li className="flex items-center pb-5 pt-5">
              <span className="mr-3 gpt-icon"> &gt;</span>
              Sed ut perspiciatians unde omnis iste nature error sit voluptatem.{" "}
              <br />
              <br />5 Minutes Ago
            </li>
            <li className="flex items-center pb-5">
              <span className="mr-3 gpt-icon"> &gt; </span>
              Sed ut perspiciatians unde omnis iste nature error sit voluptatem.{" "}
              <br />
              <br />5 Minutes Ago
            </li>
          </ul>
        </div>
        <div className="w-60">
          <h3 className="text-2xl font-bold mb-5">Customer Service</h3>
          <hr
            style={{
              borderTop: "2px dashed #FFFF00",
              width: "25%",
              margin: "0 0",
            }}
          />
          <ul className="list-none">
            <li className="flex items-center pb-5 pt-5">
              <span className="mr-3">👉🏼</span>
              Support Forums
            </li>
            <li className="flex items-center pb-5">
              <span className="mr-3">👉🏼</span>
              Communication
            </li>
            <li className="flex items-center pb-5">
              <span className="mr-3">👉🏼</span>
              FAQS
            </li>
            <li className="flex items-center pb-5">
              <span className="mr-3">👉🏼</span>
              Privacy Policy
            </li>
            <li className="flex items-center pb-5">
              <span className="mr-3">👉🏼</span>
              Rules & Conditions
            </li>
            <li className="flex items-center ">
              <span className="mr-3">👉🏼</span>
              Contact Us
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-5">Customer Service</h3>
          <hr
            style={{
              borderTop: "2px dashed #FFFF00",
              width: "25%",
              margin: "0 0",
              paddingBottom: "10%",
            }}
          />
          <div className="flex gap-2 pb-2 pt-15">
            <img src="lorry.jpg" alt="Image 1" className="w-24 h-24 " />
            <img src="lorry.jpg" alt="Image 2" className="w-24 h-24 " />
            <img src="lorry.jpg" alt="Image 3" className="w-24 h-24 " />
          </div>
          <div className="flex gap-2">
            <img src="lorry.jpg" alt="Image 4" className="w-24 h-24  " />
            <img src="lorry.jpg" alt="Image 5" className="w-24 h-24  " />
            <img src="lorry.jpg" alt="Image 6" className="w-24 h-24 " />
          </div>
        </div>
      </div>
      <div className="justify-center items-start flex gap-96 pb-10 ">
        <p>Copyright &copy; 2021 All Rights Reserved.Site By Xiteb </p>
        <div className="ml-64 flex gap-2">
          <div className="w-12 h-12 rounded-full bg-gray-400 justify-center flex">
            <img src="facebook.png" alt="Image 1" className="w-7 h-7 mt-3" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-400 justify-center flex">
            <img src="instagram.png" alt="Image 1" className="w-7 h-7 mt-3 " />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-400 justify-center flex">
            <img src="twitter.png" alt="Image 1" className="w-7 h-7 mt-3" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-400 justify-center flex">
            <img src="linkedIn.png" alt="Image 1" className="w-7 h-7 mt-3" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-400 justify-center flex">
            <img src="youtube.png" alt="Image 1" className="w-7 h-7 mt-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
