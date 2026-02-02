import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'

import { RiShoppingCart2Line } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";

import Logo from "../assets/Logo.png"

const Navber = () => {

    const [navber, setNavber] = useState(false)

    const handleNavber = ()=>{
        setNavber(!navber)
    }


  return (
    <>
        <div className='border-b-1 border-[#808080]'>
            <Container className="!p-0">
                <nav className=' pt-[40px] pb-[16px]'>
                    <Flex className="justify-between items-center relative ">
                        <div className='cursor-pointer pl-3'>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className={` lg:flex  z-10 lg:flex-row justify-between flex-col gap-4 p-4 lg:p-0 lg:w-[75%] lg:static absolute top-12 left-0 lg:bg-white lg:text-black  bg-blue-500 text-white w-full   
                        ${!navber ? "hidden" : "block"}`}>
                           <ul className=' lg:flex flex-wrap gap-[48px] pb-5'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>About</li>
                                <li>Sign Up</li>
                            </ul>
                            <div className='flex items-center gap-[16px] pr-3'>
                                <div className='flex gap-3 !text-black bg-[#F5F5F5]'>
                                    <input type="text" placeholder='What are you looking for?'
                                    className='py-[7px] pl-[15px] pr-[10px]'/>
                                    <RiSearchLine className='h-[32px] w-[32px]   cursor-pointer' />
                                </div>
                                <IoIosHeartEmpty className='h-[32px] w-[32px] cursor-pointer' />
                                <RiShoppingCart2Line className='h-[32px] w-[32px] cursor-pointer' />
                            </div>
                        </div>
                        
                        <h1 onClick={handleNavber}
                        className='block lg:hidden font-bold text-4xl pr-3 cursor-pointer'>{!navber ? "=" : "x"}</h1>
                    </Flex>
                </nav>
            </Container>
        </div>
    </>
  )
}

export default Navber
