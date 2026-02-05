import React from "react";
import Container from "./Container"

const Header = () => {
  return (
    <>
    <header className="bg-black">
      <Container>
          <p className="py-[15px] text-sm lg:text-base text-white sm:text-center text-[14px] ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a className="font-semibold ml-[8px] underline" href="#">ShopNow</a>
          </p>
      </Container>
    </header>
    </>
  );
};

export default Header;
