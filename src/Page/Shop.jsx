import React from "react";
import Container from "../Component/Container";
import Grid from "../Component/Grid";
import CategorySection from "../Component/CategorySection";

const Shop = () => {
  return (
    <>
    <div className="py-[30px] md:py-[50px] lg:py-[80px]">
      <Container>
        <Grid className="grid-cols-1 lg:grid-cols-2 !items-start">

          {/* -----------------Category Section ------------------- */}

          <div className="lg:w-[30%] w-full">
            <span>Home / Shop</span>
            <div className=" py-[25px] md:py-[35px] lg:py-[50px]">
              <h3 className="text-[20px] font-bold text-[#262626]">Shop by Category</h3>
                <div className="   w-full  pl-2  lg:static  ">
                  <ul className=" w-full text-[16px] py-5  text-xs lg:text-base lg:space-y-2 grid grid-cols-3  lg:grid-cols-1 gap-x-6 gap-y-1">
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
          <div className="lg:w-[70%] w-full">

          </div>

        </Grid>
      </Container>
    </div>
    </>
  );
};

export default Shop;
