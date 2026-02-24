import React, { useEffect, useState } from "react";

import Flex from "../Component/Flex";
import ProductListCart from "../Component/ProductListCart";
import SkeletonDemo from "../Component/SkeletonDemo"

import {CiHeart} from "react-icons/ci"
import {IoEyeOutline} from "react-icons/io5"


const ShopProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [selectOption, setSelectOption] = useState(6)
    const [loading, setLoading] = useState(true)
 
    

    useEffect(()=>{
      fetch('https://dummyjson.com/products/search?q=phone')
      .then(res => res.json())
      .then((data)=> {
        setAllProducts(data.products)
        setLoading(false)
    })},[])

    // console.log(allProducts)
    //  console.log(selectOption)
return (
  <>
    <div className="lg:w-[] w-full ">
      <div className="flex items-center gap-2  mb-4 ml-[250px">
        <h4 className="text-[16px]">Show:</h4>
        <select   id="#" onChange={(e)=> setSelectOption(e.target.value) }
                  className="border-1 border-hide rounded-md  px-7 py-1">
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
      <Flex className="items-center gap-[20px] md:gap-[15px] lg:gap-[30px] flex-wrap justify-center ">
       
        { 
        loading ?
        
          // Array.from(length, selectOption ).map((_, id)=>{
          //   <SkeletonDemo key={id}/>  
          // })
          // 
          <div className="flex gap-[30px] justify-between">
            <SkeletonDemo />  
            <SkeletonDemo />  
            <SkeletonDemo />  
          </div>
          :
        allProducts && 
            allProducts.map((items, key) => {
              return(
                <ProductListCart key={key}
                ProductImage={items.thumbnail}
                Discount={items.discountPercentage}
                Heading={items.title}
                DiscountPrice=""
                MainPrice={items.price}
                total=""
                Icon1={<CiHeart/>}
                Icon2={<IoEyeOutline/>}
                />
              )
        })
        
        }
      </Flex>
    </div>
    </>
  
);
}
export default ShopProducts;
