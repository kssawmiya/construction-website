"use client";
import Link from "next/link";
import Image from "next/image";
import Combobox from "react-widgets/cjs/Combobox";

// export const navLinks = [
//   { href: "#home", label: "HOME" },
//   { href: "#about-us", label: "PAGES" },
//   { href: "#products", label: "TRACKING" },
//   { href: "#contact-us", label: "SERVICES" },
//   { href: "#contact-us", label: "BLOG" },
// ];

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <a href="#home">
          {/* nav bar logo */}
          <Image
            src={"/C.png"}
            alt="logo"
            width={150}
            height={100}
            className="mt-3"
          />
        </a>
        <div className="ml-[380px]">
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden font-bold">
            <li className="nav-item">
              <Link href="#home">
                <select className="font-montserrat leading-normal text-lg text-slate-gray hover:text-yellow-500  hover:font-bold">
                  <option>HOME</option>
                  <option>HOME</option>
                  <option>HOME</option>
                </select>
              </Link>
            </li>
            <li className="nav-item">
              <select className="font-montserrat leading-normal text-lg text-slate-gray hover:text-yellow-500  hover:font-bold">
                <option>PAGES</option>
                <option>PAGES</option>
                <option>PAGES</option>
              </select>
            </li>
            <li className="nav-item">
              <Link href={""}>TRACKING</Link>
            </li>
            <li className="nav-item">
              <select className="font-montserrat leading-normal text-lg text-slate-gray hover:text-yellow-500  hover:font-bold">
                <option>SERVICES</option>
                <option>SERVICES</option>
                <option>SERVICES</option>
              </select>
            </li>
            <li className="nav-item">
              <select className="font-montserrat leading-normal text-lg text-slate-gray hover:text-yellow-500  hover:font-bold">
                <option>BLOG</option>
                <option>BLOG</option>
                <option>BLOG</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="flex items-center ml-5 gap-3 mr-7 font-bold">
          <button className="bg-yellow-500 text-white px-10 py-4 border font-montserrat text-lg leading-none">
            <span className="whitespace-nowrap">GET A QUOTE</span>
          </button>
          <button className="bg-black text-white px-7 py-4 border font-montserrat text-lg leading-none">
            <span className="whitespace-nowrap">SIGN IN</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
