import Flex from "./Flex"
import Button from "./Button"
import Container from "./Container"
import SignUpIMG from "../assets/SignUpImg.png"
import { Link } from "react-router-dom";

const SignUpSection = () => {



  return (
    <>
       <div className='mt-[60px] mb-[140px] max-w-[1305px] px-5 md:px-0'>
          <Flex className="gap-[129px] justify-center xl:!justify-between relative">
            <div className=' hidden xl:block '>
              <div  className="" >
                <img src={SignUpIMG} alt="SignUp Img" />
              </div>
            </div>

            <div>
              <h2 className='font-medium text-[36px] font-bold leading-[16px] tracking-tight'>Create an account</h2>
              <p className="text-[16px] leading-[24px] pt-[24px] pb-[48px]" >Enter your details below</p>
              <form action="#">
                <input type="text" placeholder='Name' className='w-[370px] h-[32px] border-b-1 mb-[40px]'/> <br />
                <input type="text" placeholder='Email or Phone Number' className='w-[370px] h-[32px] border-b-1 mb-[40px]'/> <br />
                <input type="password" placeholder='Password' className='w-[370px] h-[32px] border-b-1 mb-[40px]'/> <br />
                <div className='flex flex-col gap-[16px]  my-[32px]'>
                  <Button className=" !inline">Create Account</Button> 
                  <Button className="!bg-white !inline !text-black border-2 border-gray-500">Sign up with Google</Button>
                </div>
                <p className='text-[16px] text-center'>Already have account? <Link to={"/SignIn"} className='!border-b-2  border-gray-500' >Log in</Link> </p>
              </form>
            </div>
          </Flex>
      </div>
    {/* --------------------------- */}

    </>
  )
}

export default SignUpSection
