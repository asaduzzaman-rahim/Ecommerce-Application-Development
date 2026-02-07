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
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToScroll: 1, // 🔥 important
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-[140px] mx-auto ">
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
