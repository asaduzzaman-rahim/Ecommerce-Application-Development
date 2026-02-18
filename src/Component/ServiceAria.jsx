import React from "react";
import Flex from "../Component/Flex";

import ServiceCart from "./ServiceCart";
import Container from "./Container";


import IconCustomer from "../assets/Service (1).png";
import IconDelivery from "../assets/Service (2).png";
import IconSecure from "../assets/Service (3).png";

const ServiceAria = () => {
  return (
    <>
      <div className=" py-[30px] md:py-[70px] lg:py-[140px]">
        <Container>
          <Flex className="flex-wrap justify-center gap-x-[88px] gap-y-[30px] "> 
            <ServiceCart
              SerImg={IconCustomer}
              ServiceName={"FREE AND FAST DELIVERY"}
              ServicePara={"Free delivery for all orders over $140"}
            />
            <ServiceCart
              SerImg={IconDelivery}
              ServiceName={"24/7 CUSTOMER SERVICE"}
              ServicePara={"Friendly 24/7 customer support"}
            />
            <ServiceCart
              SerImg={IconSecure}
              ServiceName={"MONEY BACK GUARANTEE"}
              ServicePara={"We reurn money within 30 days"}
            />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ServiceAria;
