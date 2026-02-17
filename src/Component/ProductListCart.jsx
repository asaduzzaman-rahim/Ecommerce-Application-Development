import React from 'react'
import Flex from "./Flex"

import {FaStar} from "react-icons/fa"
import {CiHeart} from "react-icons/ci"
import {IoEyeOutline} from "react-icons/io5"

import productimg from "../assets/ProductImage.jpg"

const ProductListCart = () => {
  return (
    <>
        <div className='w-[270px] group'>
            <div className='relative overflow-hidden '>
                <img src={productimg} />
                <h5 className='absolute top-[12px] left-[12px] py-[4px] px-[12px] bg-primary text-white inline-block text-[12px] rounded-[4px] font-poppins leading-[18px]'>-40%</h5>
                <div className='absolute top-[12px] right-[12px]'>
                  <CiHeart className='text-[26px] leading-[18px]  mb-[8px] text-black cursor-pointer'/>
                  <IoEyeOutline className=' text-[26px] leading-[18px]  mb-[8px] text-black cursor-pointer'/>
                </div>
                  <button className='group-hover:bottom-0 text-[16px] font-poppins font-medium leading-[24px] text-center py-[8px] bg-black text-white w-full duration-300 absolute bottom-[-45px] left-0  cursor-pointer'>Add to Cart</button>
            </div>
            <h3 className='text-[16px] font-poppins font-medium leading-[24px] pt-[16px] '>HAVIT HV-G92 Gamepad</h3>
            <Flex className=' gap-[12px] py-[8px]'>
              <p className='text-[16px] font-poppins text-primary font-medium leading-[24px]'>$120</p>
              <p className='text-[16px] font-poppins text-hide font-medium leading-[24px]'>$160</p>
            </Flex>
            <Flex className='gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <span className='text-[14px] font-poppins font-semibold ml-[8px]'>(88)</span>
            </Flex>
            
        </div>      
    </>
  )
}

export default ProductListCart
