import React from 'react'
import Container from './Container'
import SecHeading from './SecHeading'
import ProductListCart from './ProductListCart'
import Button from './Button'
import { Link } from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import productimg from "../assets/ProductImage.jpg"
import ProductImg01 from "../assets/BestProduct (1).png"
import ProductImg02 from "../assets/BestProduct (2).png"
import ProductImg03 from "../assets/BestProduct (3).png"


const OurExploreProducts = () => {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
    };

    // function SampleNextArrow(props) {
    // const { className, style, onClick } = props;
    // return (
    //     <div
    //     className={className}
    //     style={{ ...style, display: "block", background: "red" }}
    //     onClick={onClick}
    //     />
    // );
    // }

    // function SamplePrevArrow(props) {
    // const { className, style, onClick } = props;
    // return (
    //     <div
    //     className={className}
    //     style={{ ...style, display: "block", background: "green" }}
    //     onClick={onClick}
    //     />
    // );
    // }
  return (
    <>
        <section className='pt-[70px] pb-[140px]'>
            <Container>               
                <SecHeading  tittle="Our Products" heading="Explore Our Products"/>
               <div className='my-[40px]'>
                    <Slider {...settings} >
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
                    </Slider>

                </div> 
                <div className='text-center'>
                    <Link to={"/shop"}><Button>View All Products</Button></Link> 
                </div>
            </Container>    
        </section> 
    </>
  )
}

export default OurExploreProducts
