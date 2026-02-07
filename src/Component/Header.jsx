import React from "react";
import Container from "./Container"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header className="bg-black">
      <Container>
          <p className="py-[15px] text-sm lg:text-base text-white sm:text-center text-[14px] ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link to={"/shop"} className="font-semibold ml-[8px] underline" >ShopNow</Link>
          </p>
      </Container>
    </header>
    </>
  );
};

export default Header;
