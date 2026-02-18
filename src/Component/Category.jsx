import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import SecHeading from "./SecHeading";
import CategoryCart from "./CategoryCart";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import PhoneImg from "../assets/Category-CellPhone@3x.png";
import ComputerImg from "../assets/Category-Computer.png";
import SmartWatch from "../assets/Category-SmartWatch.png";
import Cemera from "../assets/Category-Camera.png";
import Headphone from "../assets/Category-Headphone.png";
import Gameimg from "../assets/Category-Gamepad.png";

const Category = () => {

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 5000,
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
      <section className="mb-4">
        <Container>
          <div className="pt-[80px] pb-[70px] border-t-1 border-b-1 border-[#b3b3b3]">
            <SecHeading tittle="Category " heading="Browse By Category" />
              <div className="mt-[60px]">
                <Slider {...settings}>
                <CategoryCart CategoryImg={PhoneImg} tittle="Phone" />
                <CategoryCart CategoryImg={ComputerImg} tittle="Computer" />
                <CategoryCart CategoryImg={SmartWatch} tittle="SmartWatch" />
                <CategoryCart CategoryImg={Cemera} tittle="Cemera" />
                <CategoryCart CategoryImg={Headphone} tittle="Headphone" />
                <CategoryCart CategoryImg={Gameimg} tittle="Gaming" />
                <CategoryCart CategoryImg={PhoneImg} tittle="Phone" />
                <CategoryCart CategoryImg={ComputerImg} tittle="Computer" />
                <CategoryCart CategoryImg={SmartWatch} tittle="SmartWatch" />
                <CategoryCart CategoryImg={Cemera} tittle="Cemera" />
                <CategoryCart CategoryImg={Headphone} tittle="Headphone" />
                <CategoryCart CategoryImg={Gameimg} tittle="Gaming" />
              </Slider>
              </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Category;
