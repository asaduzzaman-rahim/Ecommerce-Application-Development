import React from "react";
import SecHeading from "./SecHeading";
import Container from "./Container";
import Flex from "./Flex";
import ProductListCart from "./ProductListCart";
import Button from "./Button";

import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import productimg from "../assets/ProductImage.jpg"


const FreshSales = () => {

//   function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="my-[30px] lg:mt-[120px] lg:mb-[70px] !md:mt-[50px] md:mb-[40px] ">
        <Container>
        <div>
          <SecHeading tittle="Today's " heading="Flash Sales" />

          <div className="mt-[40px] mb-[60px] ">
            <Slider {...settings}>
                <ProductListCart 
                  ProductImage={productimg}
                  Discount="-40%"
                  Heading="HAVIT HV-G92 Gamepad"
                  DiscountPrice="$120"
                  MainPrice="$160"
                />
                <ProductListCart 
                  ProductImage={productimg}
                  Discount="-40%"
                  Heading="HAVIT HV-G92 Gamepad"
                  DiscountPrice="$120"
                  MainPrice="$160"
                />
                <ProductListCart 
                  ProductImage={productimg}
                  Discount="-40%"
                  Heading="HAVIT HV-G92 Gamepad"
                  DiscountPrice="$120"
                  MainPrice="$160"
                />
                <ProductListCart 
                  ProductImage={productimg}
                  Discount="-40%"
                  Heading="HAVIT HV-G92 Gamepad"
                  DiscountPrice="$120"
                  MainPrice="$160"
                />
                <ProductListCart 
                  ProductImage={productimg}
                  Discount="-40%"
                  Heading="HAVIT HV-G92 Gamepad"
                  DiscountPrice="$120"
                  MainPrice="$160"
                />
                <ProductListCart 
                  ProductImage={productimg}
                  Discount="-40%"
                  Heading="HAVIT HV-G92 Gamepad"
                  DiscountPrice="$120"
                  MainPrice="$160"
                />
                <ProductListCart 
                  ProductImage={productimg}
                  Discount="-40%"
                  Heading="HAVIT HV-G92 Gamepad"
                  DiscountPrice="$120"
                  MainPrice="$160"
                />
                <ProductListCart 
                  ProductImage={productimg}
                  Discount="-40%"
                  Heading="HAVIT HV-G92 Gamepad"
                  DiscountPrice="$120"
                  MainPrice="$160"
                />
            </Slider>
          </div>

               
            
          <div className="text-center">
            <Link to={"/shop"}><Button className="text-center">View All Products</Button></Link> 
          </div>
        </div>
      </Container>
      </section>
    </>
  );
};

export default FreshSales;
