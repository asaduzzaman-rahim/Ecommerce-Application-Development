import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ProductListCart from "./ProductListCart"

import productimg from "../assets/ProductImage.jpg"
import ProductImg01 from "../assets/BestProduct (1).png"
import ProductImg02 from "../assets/BestProduct (2).png"
import ProductImg03 from "../assets/BestProduct (3).png"

const RelatedProductList = () => {
  return (
    <>
      <Container>
        <Flex className="flex flex-wrap justify-center gap-[30px]" >
             <ProductListCart 
                ProductImage={productimg}
                Discount="-40%"
                Heading="Breed Dry Dog Food "
                DiscountPrice="$100"
            />
            <ProductListCart 
                ProductImage={ProductImg01}
                Discount="-40%"
                Heading="CANON EOS DSLR Camera"
                DiscountPrice="$360"
            />
            <ProductListCart 
                ProductImage={ProductImg03}
                Discount="-40%"
                Heading="ASUS FHD Gaming Laptop"
                DiscountPrice="$700"
                />
            <ProductListCart 
                ProductImage={ProductImg02}
                Discount="-40%"
                Heading="Curology Product Set "
                DiscountPrice="$500"
            />
        </Flex>
      </Container>
    </>
  )
}

export default RelatedProductList
