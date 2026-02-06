import React from 'react'
import Container from "./Container"
import Flex from "./Flex"

import IconCart from './IconCart'
import IconShop1 from "../assets/icon_shop.png"


const AboutCart = () => {
  return (
    <>
    <Container>
        <Flex className="justify-center flex-wrap gap-[30px]">
            <IconCart 
            IconImg={IconShop1}
            Num={"10.5 k"}
            para={"Sallers active our site"}
            />
            <IconCart 
            IconImg={IconShop1}
            Num={"10.5 k"}
            para={"Sallers active our site"}
            />
            <IconCart 
            IconImg={IconShop1}
            Num={"10.5 k"}
            para={"Sallers active our site"}
            />
            <IconCart 
            IconImg={IconShop1}
            Num={"10.5 k"}
            para={"Sallers active our site"}
            />
        </Flex>
    </Container>
    </>
  )
}

export default AboutCart
