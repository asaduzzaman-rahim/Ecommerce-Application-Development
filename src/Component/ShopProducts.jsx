import React, { useEffect, useState } from "react";

import Flex from "../Component/Flex";
import ProductListCart from "../Component/ProductListCart";


const ShopProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
     

    useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setAllProducts(data.products));
    }, []);
return (
  <>
    <div className="lg:w-[] w-full ">
      <div className="flex items-center gap-2  ">
        <h4 className="text-[16px]">Show:</h4>
        <select id="#" className="border-1 border-hide rounded-md  px-7 py-1">
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
      <Flex className="items-center gap-[30px] flex-wrap justify-center">
        { allProducts && 
            allProducts.map((items) => {
              <ProductListCart
                ProductImage={items.thumbnail}
                Discount=""
                Heading=""
                DiscountPrice=""
                MainPrice=""
                total=""
                />;
        })}
      </Flex>
    </div>
    </>
  
);
}
export default ShopProducts;
