import React from "react";
import Container from "./Container";
import SecHeading from "./SecHeading";
import Button from "./Button";
import Flex from "./Flex";
import ProductListCart from "./ProductListCart";

import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

import productimg from "../assets/ProductImage.jpg";

const BestSellingProductSection = () => {
  return (
    <>
      <section className="mt-[70px] mb-[140px]">
        <Container>
          <Flex className="justify-between items-end mb-[60px]">
            <SecHeading tittle="This Month " heading="Best Salling Products" />
            <Button>View All</Button>
          </Flex>
          <Flex className=" flex-wrap justify-center gap-[30px]">
            <ProductListCart
              ProductImage={productimg}
              Icon1={<CiHeart />}
              Icon2={<IoEyeOutline />}
              Heading="The north coat"
              DiscountPrice="$260"
              MainPrice="$360"
              total="(65)"
              className="!hidden"
            />
            <ProductListCart
              ProductImage={productimg}
              Icon1={<CiHeart />}
              Icon2={<IoEyeOutline />}
              Heading="Gucci duffle bag"
              DiscountPrice="$960"
              MainPrice="$1160"
              total="(65)"
              className="!hidden"
            />
            <ProductListCart
              ProductImage={productimg}
              Icon1={<CiHeart />}
              Icon2={<IoEyeOutline />}
              Heading="RGB liquid CPU Cooler"
              DiscountPrice="$160"
              MainPrice="$170"
              total="(65)"
              className="!hidden"
            />
            <ProductListCart
              ProductImage={productimg}
              Icon1={<CiHeart />}
              Icon2={<IoEyeOutline />}
              Heading="Small BookSelf"
              DiscountPrice="$360"
              total="(65)"
              className="!hidden"
            />
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default BestSellingProductSection;
