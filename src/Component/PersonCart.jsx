import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const PersonCart = ({PersonImg, PersonName, PersonTittle}) => {
  return (
    <>
        <div className='w-[370px] h-[564px]'>
            <img src={PersonImg} alt="Person Photo" />
            <div className='pt-[32px]'>
                <h3 className='text-[32px] font-700 leading-[30px]'>{PersonName}</h3>
                <p className='pt-[8px] pb-[16px] text-[16px] leading-[24px] '>{PersonTittle}</p>
                <div className='flex gap-[18px]'>
                    <FaLinkedinIn className='cursor-pointer'/>
                    <CiTwitter className='cursor-pointer'/>
                    <FaInstagram className='cursor-pointer'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default PersonCart