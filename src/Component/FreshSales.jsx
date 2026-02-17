import React from "react";
import SecHeading from "./SecHeading";
import Container from "./Container";
import Flex from "./Flex";
import ProductListCart from "./ProductListCart";
import Button from "./Button";

const FreshSales = () => {
  return (
    <>
      <section className="my-[30px] lg:mt-[120px] lg:mb-[70px] !md:mt-[50px] md:mb-[40px] ">
        <Container>
        <div>
          <SecHeading tittle="Today's " heading="Flash Sales" />

          <Flex className="mt-[40px] mb-[60px] gap-[30px] flex-wrap">
            <ProductListCart/>
            <ProductListCart/>
            <ProductListCart/>
            <ProductListCart/>
          </Flex>
          <div className="text-center">
            <Button className="text-center">View All Products</Button>
          </div>
        </div>
      </Container>
      </section>
    </>
  );
};

export default FreshSales;
