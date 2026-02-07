import React from "react";
import Container from "./Container";
import PersonCart from "./PersonCart";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Person1 from "../assets/Person1.png";
import Person2 from "../assets/Person2.png";
import Person3 from "../assets/Person3.jpg";

const PersonSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1, // 🔥 important
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-[140px]">
      <Container>
        <Slider {...settings}>
          
            <PersonCart
              PersonImg={Person1}
              PersonName="Tom Cruise"
              PersonTittle="Founder & Chairman"
            />
          
            <PersonCart
              PersonImg={Person2}
              PersonName="Emma Watson"
              PersonTittle="Managing Director"
            />
      
            <PersonCart
              PersonImg={Person3}
              PersonName="Will Smith"
              PersonTittle="Product Designer"
            />
            <PersonCart
              PersonImg={Person1}
              PersonName="Tom Cruise"
              PersonTittle="Founder & Chairman"
            />
          
            <PersonCart
              PersonImg={Person2}
              PersonName="Emma Watson"
              PersonTittle="Managing Director"
            />
      
            <PersonCart
              PersonImg={Person3}
              PersonName="Will Smith"
              PersonTittle="Product Designer"
            />
         
        </Slider>
      </Container>
    </div>
  );
};

export default PersonSection;
