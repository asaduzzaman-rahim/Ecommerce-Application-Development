import React from "react";
import Container from "./Container";
import SecHeading from "./SecHeading";
import ProductListCart from "./ProductListCart";
import Button from "./Button";
import Flex from "./Flex";
import { Link } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

import productimg from "../assets/ProductImage.jpg";
import ProductImg01 from "../assets/BestProduct (1).png";
import ProductImg02 from "../assets/BestProduct (2).png";
import ProductImg03 from "../assets/BestProduct (3).png";

const OurExploreProducts = () => {
  return (
    <>
      <section className="pt-[70px] pb-[140px]">
        <Container>
          <SecHeading tittle="Our Products" heading="Explore Our Products" />
          <div className="my-[40px]">
            <Flex className="flex justify-center flex-wrap gap-[30px] ">
              <ProductListCart
                ProductImage={productimg}
                Icon1={<CiHeart />}
                Icon2={<IoEyeOutline />}
                Discount="-40%"
                Heading="Breed Dry Dog Food "
                DiscountPrice="$100"
              />
              <ProductListCart
                ProductImage={ProductImg01}
                Icon1={<CiHeart />}
                Icon2={<IoEyeOutline />}
                Discount="-40%"
                Heading="CANON EOS DSLR Camera"
                DiscountPrice="$360"
              />
              <ProductListCart
                ProductImage={ProductImg03}
                Icon1={<CiHeart />}
                Icon2={<IoEyeOutline />}
                Discount="-40%"
                Heading="ASUS FHD Gaming Laptop"
                DiscountPrice="$700"
              />
              <ProductListCart
                ProductImage={ProductImg02}
                Icon1={<CiHeart />}
                Icon2={<IoEyeOutline />}
                Discount="-40%"
                Heading="Curology Product Set "
                DiscountPrice="$500"
              />
              <ProductListCart
                ProductImage={productimg}
                Icon1={<CiHeart />}
                Icon2={<IoEyeOutline />}
                Discount="-40%"
                Heading="Breed Dry Dog Food "
                DiscountPrice="$100"
              />
              <ProductListCart
                ProductImage={ProductImg01}
                Icon1={<CiHeart />}
                Icon2={<IoEyeOutline />}
                Discount="-40%"
                Heading="CANON EOS DSLR Camera"
                DiscountPrice="$360"
              />
              <ProductListCart
                ProductImage={ProductImg03}
                Icon1={<CiHeart />}
                Icon2={<IoEyeOutline />}
                Discount="-40%"
                Heading="ASUS FHD Gaming Laptop"
                DiscountPrice="$700"
              />
              <ProductListCart
                ProductImage={ProductImg02}
                Icon1={<CiHeart />}
                Icon2={<IoEyeOutline />}
                Discount="-40%"
                Heading="Curology Product Set "
                DiscountPrice="$500"
              />
            </Flex>
          </div>
          <div className="text-center">
            <Link to={"/shop"}>
              <Button>View All Products</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurExploreProducts;
