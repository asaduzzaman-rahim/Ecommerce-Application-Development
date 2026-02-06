import React from "react";
import Flex from "../Component/Flex";

import ServiceCart from "./ServiceCart";
import Container from "./Container";


// import IconCustomer from "../assets/Icon-Customer service.png";
// import IconDelivery from "../assets/icon-delivery.png";
// import IconSecure from "../assets/Icon-secure.png";

const ServiceAria = () => {
  return (
    <>
      <div className="py-[140px]">
        <Container>
          <Flex className="flex-wrap justify-center gap-[88px] "> 
            <ServiceCart
              // SerImg={IconCustomer}
              ServiceName={"FREE AND FAST DELIVERY"}
              ServicePara={"Free delivery for all orders over $140"}
            />
            <ServiceCart
              // SerImg={IconDelivery}
              ServiceName={"24/7 CUSTOMER SERVICE"}
              ServicePara={"Friendly 24/7 customer support"}
            />
            <ServiceCart
              // SerImg={IconSecure}
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
