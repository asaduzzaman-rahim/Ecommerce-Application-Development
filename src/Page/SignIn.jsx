import React from 'react'
import Flex from "../Component/Flex"
import Button from "../Component/Button"
import Container from "../Component/Container"
import SignUpIMG from "../assets/SignUpImg.png"

const SignUp = () => {
  return (
    <>
      <div className='mt-[60px] mb-[140px]  max-w-[1305px]'>
        <div>
          <Flex className="gap-[129px] justify-center lg:justify-between relative">
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
                    <Button>Log In</Button>
                     <a className='text-[16px] text-red-500' href='#'>Forget Password?</a> 
                </Flex>
              </form>
            </div>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default SignUp
