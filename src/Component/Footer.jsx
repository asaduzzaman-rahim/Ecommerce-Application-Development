import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border-t-2 mt-5 bg-black text-white ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
              Exclusive
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
        
              <li> <Link  className="hover:underline me-4 md:me-6" to={"/about"}> About </Link> </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>       
              <li> <Link className="hover:underline" to={"/contact"}>Contact</Link> </li>
          </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center">
          © 2023 . All Rights Reserved.
        </span>
      </div>
    </footer>

    </>
  );
};

export default Footer;
