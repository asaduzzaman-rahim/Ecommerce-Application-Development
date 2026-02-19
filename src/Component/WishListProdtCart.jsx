import React from 'react'
import Flex from "./Flex"

import { RiDeleteBin6Line } from "react-icons/ri";


const ProductListCart = ({className,ProductImage,Discount,Heading,DiscountPrice,MainPrice}) => {
  return (
    <>
        <div className='w-[270px]'>
            <div className='relative overflow-hidden '>
                <img src={ProductImage} />
                <h5 className={`${className} absolute top-[12px] left-[12px] py-[4px] px-[12px] bg-primary text-white inline-block text-[12px] rounded-[4px] font-poppins leading-[18px]`}>{Discount}</h5>
                <div className='absolute top-[12px] right-[12px]'>
                  <RiDeleteBin6Line className='text-[26px] leading-[18px]  mb-[8px] text-black cursor-pointer'/>
                </div>
                  <button className='text-[16px] font-poppins font-medium leading-[24px] text-center py-[8px] bg-black text-white w-full duration-300 absolute bottom-0 left-0  cursor-pointer'>Add to Cart</button>
            </div>
            <h3 className='text-[16px] font-poppins font-medium leading-[24px] pt-[16px] '>{Heading}</h3>
            <Flex className=' gap-[12px] py-[8px]'>
              <p className='text-[16px] font-poppins text-primary font-medium leading-[24px]'>{DiscountPrice}</p>
              <p className='text-[16px] font-poppins text-hide font-medium leading-[24px]'>{MainPrice}</p>
            </Flex>
          
            
        </div>      
    </>
  )
}

export default ProductListCart

