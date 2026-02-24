import React, { useState } from "react";
import Container from "../Component/Container";
import Grid from "../Component/Grid";

import { BiSolidCategory } from "react-icons/bi";
import Flex from "../Component/Flex";
import ProductListCart from "../Component/ProductListCart";
import ShopProducts from "../Component/ShopProducts";


const Shop = () => {

  const [show, setShow] = useState(false)

  const handleClick = ()=>{
    setShow(!show)
  }


  return (
    <>
    <div className="py-[30px] md:py-[50px] lg:py-[80px]">
      <Container>
        {/* <Grid className="grid-cols-1 lg:grid-cols-2 !items-start"> */}
        <Flex className="!items-start flex-wrap lg:flex-nowrap gap-x-[40px]">

          {/* -----------------Category Section ------------------- */}

          <div className="lg:w-[220px]  w-full">
            <span>Home / Shop</span>
            <div className=" py-[15px] md:py-[25px] lg:py-[50px]">
              <Flex className="justify-between items-center ">
                <Flex className="justify-between items-center">
                  <h3 className="text-[20px] font-bold text-[#262626]">Shop by Category</h3>
                </Flex>
                <button onClick={handleClick} className="text-[30px] font-bold text-[#262626] cursor-pointer md:hidden"><BiSolidCategory /></button>
              </Flex>
              <div className={` ${show ? "block" : "hidden"} md:block`}>               
                  <ul className={` w-full  text-[16px] lg:py-5 py-2  text-xs lg:text-base lg:space-y-2 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-1 gap-x-6 gap-y-1`}>
                    <li>Woman’s Fashion</li>
                    <li>Men’s Fashion </li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys </li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                  </ul>
              </div>
            </div>
          </div>

          {/* ** ------------- Product list Items----------------- */}
          <div className="w-[100%] lg:!w-75%]">
            <ShopProducts/>
          </div>
          

        </Flex>
        {/* </Grid> */}
      </Container>
    </div>
    </>
  );
};

export default Shop;
