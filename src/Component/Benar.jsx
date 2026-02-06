import React from "react";
import Container from "./Container";
import Flex from "./Flex";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { IoIosArrowForward } from "react-icons/io";
import BenarImg from "../assets/Benar.png";

const Benar = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    appendDots: dots => (
      <div className=""     >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className=" h-3 w-3 bg-[#808080]  rounded-full">

      </div>
    )
  };

  
  return (
    <>
      <Container className="!px-0">
        <div className="h-[300px] sm:h-[450px] lg:h-[455px]">
          <Flex className="lg:justify-between relative">
            {/* ! Category Section Start now */}
            <div className="lg:border-r-3 lg:w-[280px]  w-full absolute px-4 top-42 left-0 sm:top-50 md:top-70  lg:static border-[#E5E5E5] ">
              <ul className=" w-full text-[16px] py-10 lg:mr-5 text-xs lg:text-base lg:space-y-4 grid grid-cols-3  lg:grid-cols-1 gap-x-6 gap-y-1">
                <li className="flex justify-between items-center">
                  Woman’s Fashion <IoIosArrowForward />
                </li>
                <li className="flex justify-between items-center">
                  Men’s Fashion <IoIosArrowForward />
                </li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys </li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
              </ul>
            </div>
            {/* ! Category Section end now */}

            {/* ! Slider Section Start now */}
            <div className="!w-full lg:ml-10 mt-2 lg:mt-10 overflow-hidden">
              <Slider {...settings}>
                <div>
                  <img src={BenarImg} alt="Benar Image" />
                </div>
                <div>
                  <img src={BenarImg} alt="Benar Image" />
                </div>
                <div>
                  <img src={BenarImg} alt="Benar Image" />
                </div>
                <div>
                  <img src={BenarImg} alt="Benar Image" />
                </div>
                <div>
                  <img src={BenarImg} alt="Benar Image" />
                </div>
                <div>
                  <img src={BenarImg} alt="Benar Image" />
                </div>
              </Slider>
            </div>

            {/* ! Slider Section end now */}
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Benar;

