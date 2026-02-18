import React from 'react'
import Container from './Container'
import SecHeading from './SecHeading'
import FeaturedCart from './FeaturedCart'
import Flex from "./Flex"

import Image03 from "../assets/Feature 1 (3).png"
import Image02 from "../assets/Feature 1 (2).png"
import Image01 from "../assets/Feature 1 (1).png"

const FeaturedArrival = () => {
  return (
    <>
      <section className=''>
        <Container>
            <SecHeading tittle="Featured" heading="New Arrival" />
            <Flex className="pt-[60px] !items-start flex-wrap justify-center  gap-[30px]">
                <FeaturedCart 
                    image={Image03}
                    heading="PlayStation 5" 
                    tittle="Black and White version of the PS5 coming out on sale." 
                    shop="Shop Now"
                    />
               <Flex className="flex-col gap-[30px]">
                 <FeaturedCart 
                    image={Image02}
                    heading="Women’s Collections" 
                    tittle="Featured woman collections that give you another vibe." 
                    shop="Shop Now"
                />
               <Flex className="gap-[30px]">
                 <FeaturedCart 
                    image={Image01}
                    heading="Speakers" 
                    tittle="Amazon wireless speakers" 
                    shop="Shop Now"
                />
                <FeaturedCart 
                    image={Image01}
                    heading="Speakers" 
                    tittle="Amazon wireless speakers" 
                    shop="Shop Now"
                />
               </Flex>
               </Flex>
            </Flex>
        </Container>
      </section>
    </>
  )
}

export default FeaturedArrival
