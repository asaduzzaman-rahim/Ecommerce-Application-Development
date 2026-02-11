import React from 'react'
import Grid from '../Component/Grid'
import Container from '../Component/Container'
import Button from '../Component/Button'

import Cart1 from "../assets/Monitor-Cart-Small.png"
import Cart2 from "../assets/Gamepad-Cart-Small.png"

const CheckOut = () => {
  return (
    <>
     <div className='pb-[80px] lg:pb-[140px]'>
        <Container>
            <div className='py-[40px] lg:py-[80px]'>
                <span>CheckOut</span>
            </div>
            <Grid className="grid-cols-1 lg:grid-cols-2 justify-between !items-start lg:gap-x-[173px]">
                <div>
                    <h2 className='text-[20px] lg:text-[36px] font-medium leading-[30px] '>Billing Details</h2>
                    <div className='pt-[48px]'>
                        <form action="#" className="space-y-[32px]">
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Frist Name</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] h-[50px] w-full lg:w-[470px] mt-[8px] pl-1"  required/>
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Company Name</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] h-[50px] w-full lg:w-[470px] mt-[8px] pl-1"  required/>
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Street Address*</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] h-[50px] w-full lg:w-[470px] mt-[8px] pl-1"  required/>
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Apartment, floor, etc. (optional)</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] h-[50px] w-full lg:w-[470px] mt-[8px] pl-1" />
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Town/City*</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] h-[50px] w-full lg:w-[470px] mt-[8px] pl-1" required />
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Phone Number*</label> <br />
                                <input type="number"  className="bg-[#f5f5f5] h-[50px] w-full lg:w-[470px] mt-[8px] pl-1" required />
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Email Address</label> <br />
                                <input type="email"  className="bg-[#f5f5f5] h-[50px] w-full lg:w-[470px] mt-[8px] pl-1"  required/>
                            </div>
                            <div className='flex gap-[16px]'>

                                <p>Save this information for faster check-out next time</p>
                            </div>
                        </form>
                    </div>
                </div>    
                <div className='lg:mt-[32px]'>
                    <table className="w-full text-sm text-left rtl:text-right text-body space-y-[32px]">
                        <tr>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <div className='flex items-center gap-[20px]'> 
                                    <img src={Cart1} alt="cart photo" /> <p>LCD Monitor</p>
                                </div>
                            </td>
                            <td className=' py-2 text-[14px] w-[20%] text-end'>
                                <p>$650</p>
                            </td>
                        </tr>
                        <tr>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <div className='flex items-center gap-[20px]'> 
                                    <img src={Cart2} alt="cart photo" /> <p>H1 Gamepad</p>
                                </div>
                            </td>
                            <td className=' py-2 text-[14px]  w-[20%] text-end'>
                                <p>$550</p>
                            </td>
                        </tr>
                        <tr className=' border-b-1'>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <p>Subtotal:</p>
                            </td>
                            <td className=' py-2 text-[14px]  w-[20%] text-end'>
                                <p>$1750</p>
                            </td>
                        </tr>
                        <tr className=' border-b-1'>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <p>Shipping:</p>
                            </td>
                            <td className=' py-2 text-[14px]  w-[20%] text-end'>
                                <p>Free</p>
                            </td>
                        </tr>
                        <tr>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <p>Total:</p>
                            </td>
                            <td className=' py-2 text-[14px]  w-[20%] text-end'>
                                <p>$1750</p>
                            </td>
                        </tr>
                    </table>
                    <div className='flex gap-x-[16px] py-[32px]'>
                        <input type="text" placeholder='Coupon Code' className='w-[300px] h-[56px] bg-[#f4f4f4]' />
                        <Button>ApplyCoupon</Button>
                    </div>
                    <Button>Place Order</Button>
                </div>    
            </Grid>  
        </Container>
    </div> 
    </>
  )
}

export default CheckOut
