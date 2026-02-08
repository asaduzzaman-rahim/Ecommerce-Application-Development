import React from 'react'
import Container from '../Component/Container'
import Button from "../Component/Button"
import Flex from "../Component/Flex"
import { Link } from "react-router-dom";


import Cart1 from "../assets/Monitor-Cart-Small.png"
import Cart2 from "../assets/Gamepad-Cart-Small.png"

const CartSection = () => {
  return (
    <>
      <div className='pb-[140px] '>
        <Container>
            <div className='py-[80px] '>
                <span>Home / Cart</span>
            </div>
            <div>
                <table className="w-full text-sm text-left rtl:text-right text-body ">
                  <thead className="text-sm text-body bg-neutral-secondary-medium border-1 border-indigo-200 py-[20px] ">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-s-base font-bold w-[50%]">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] font-bold w-[20%]">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-e-base font-bold w-[10%]">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-e-base text-right font-bold w-[20%]">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tr className='py-[20px]'>
                    <td className="px-6 py-2  text-[14px] font-medium w-[50%]">
                      <div className='flex items-center gap-[20px]'> 
                        <img src={Cart1} alt="cart photo" /> <p>LCD Monitor</p>
                      </div>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[20%]'>
                      <p>$650</p>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[10%]'>
                      <input type="number" className='h-[44px] w-[72px] border-1 rounded-[5px] text-center shadow-lg ' />
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[20%] text-right'>
                      <p>$650</p>
                    </td>
                  </tr>

                  <tr className='py-[20px]'>
                    <td className="px-6 py-2  text-[14px] font-medium w-[50%]">
                      <div className='flex items-center gap-[20px]'> 
                        <img src={Cart2} alt="cart photo" /> <p>H1 Gamepad</p>
                      </div>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[20%]'>
                      <p>$550</p>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[10%]'>
                      <input type="number" className='h-[44px] w-[72px] border-1 rounded-[5px] text-center shadow-lg ' />
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[20%] text-right'>
                      <p>$1100</p>
                    </td>
                  </tr>
                </table>

                {/* ---------------------------------- */}
                <Flex className="justify-between pt-[24px] pb-[80px]">
                  <Button className="!bg-white px-[48px] !text-black border-1 "> <Link to={"/shop"}>Return To Shop</Link></Button>
                  <Button className="!bg-white px-[48px] !text-black border-1 ">Update Cart</Button>
                </Flex>
                <Flex className="flex-wrap justify-center lg:justify-between !items-start  gap-y-[50px]">
                  <div className='flex gap-[16px]'>
                    <input type="text" placeholder='Coupon Code' className='pl-[24px] w-[300px] h-[56px] border-1 border-gray-400' />
                    <Button>Apply Coupon</Button>
                  </div>

                  {/* --------------------------------------- */}
                  {/* *!  total section */}

                  <div className='px-[24px] py-[32px] border-1 w-[470px] '>
                    <h4 className='text-[20px] font-medium leading-[28px] pb-[24px]'>Cart Total</h4>
                    <table className='w-full text-sm text-left rtl:text-right text-body'>
                      <tr className='border-b-1'>
                        <td className=' py-2 text-[14px] font-medium w-[50%] text-left'>
                        <p>Subtotal:</p>
                      </td>
                      <td className=' py-2 text-[14px] font-medium w-[50%] text-right'>
                        <p>$1750</p>
                      </td>
                      </tr>
                      {/* ----------------- Shipping Section ----------------- */}
                      <tr className='border-b-1 py-[16px]'>
                        <td className=' py-2 text-[14px] font-medium w-[50%] text-left'>
                        <p>Shipping:</p>
                      </td>
                      <td className=' py-2 text-[14px] font-medium w-[50%] text-right'>
                        <p>Free</p>
                      </td>
                      </tr>
                      {/* -----------Total Section -------------- */}
                      <tr className=''>
                        <td className=' py-2 text-[14px] font-medium w-[50%] text-left'>
                        <p>Total:</p>
                      </td>
                      <td className=' py-2 text-[14px] font-medium w-[50%] text-right'>
                        <p>$1450</p>
                      </td>
                      </tr>
                    </table>
                    <Button className="pt-[16px]">Procees to checkout</Button>
                  </div>
                </Flex>
            </div>
        </Container>
      </div>
    </>
  )
}



export default CartSection