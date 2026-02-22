import React, { useState } from 'react'
import Flex from "./Flex"
import Button from "./Button"
import Container from "./Container"
import SignUpIMG from "../assets/SignUpImg.png"

const SignInSection = () => {
    const [forgetPassword, setForgetPassword] = useState(false)
  
    const handleClick = (e)=>{
        e.preventDefault()
        setForgetPassword(!forgetPassword)
    }
  return (
    <>
      <div className='mt-[60px] mb-[140px]  max-w-[1305px]'>
        <div>
          <Flex className="gap-[129px] justify-center lg:!items-start lg:justify-between relative">
            <div className='hidden lg:block'>
                <img src={SignUpIMG} alt="SignUp Img" />
            </div>

            <div>
              <h2 className='font-medium text-[36px] font-bold leading-[16px] tracking-tight'>Create an account</h2>
              <p className="text-[16px] leading-[24px] pt-[24px] pb-[48px]" >Enter your details below</p>
              <form action="#">
                <input type="text" placeholder='Email or Phone Number' className='w-[370px] h-[32px] border-b-1 mb-[40px]'/> <br />
                <input type="password" placeholder='Password' className='w-[370px] h-[32px] border-b-1 mb-[40px]'/> <br />
                <Flex className="justify-between">
                    <Button className="!px-4">Log In</Button>
                     <button onClick={handleClick} className='text-[16px] text-red-500 cursor-pointer' >Forget Password?</button> 
                </Flex>

                { forgetPassword ? <div className='pt-[70px]'>
                    <h3 className='font-medium text-[36px] font-bold leading-[16px] tracking-tight mb-[20px]'>Forger Password</h3>
                    <input type="text" placeholder='Email or Phone Number' className='w-[370px] h-[32px] border-b-1 my-[20px]'/> <br />
                    <Button className="!px-4 inline-block">Submite</Button>
                </div> : null}

              </form>
            </div>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default SignInSection
