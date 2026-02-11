import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const CategorySection = () => {
  return (
    <>
      <div className="lg:border-r-3 lg:w-[280px]  w-full absolute  px-4 top-42 left-0 sm:top-50 md:top-70  lg:static border-[#E5E5E5] ">
        <ul className=" w-full text-[16px] py-10 lg:mr-5 text-xs lg:text-base lg:space-y-4 grid grid-cols-3  lg:grid-cols-1 gap-x-6 gap-y-1">
          <li className="flex justify-between items-center">
            Woman’s Fashion <IoIosArrowForward />
          </li>
          <li className="flex justify-between items-center">
            Men’s Fashion <IoIosArrowForward />
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys </li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
    </>
  )
}

export default CategorySection
