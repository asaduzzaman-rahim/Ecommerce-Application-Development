import React from 'react'
import Flex from "./Flex"
import Container from "./Container"

import StoryImg from "../assets/OurStoryImg.png"

const OurStory = () => {
  return (
    <>
    <div className='py-[140px]'>
        {/* <Container> */} 
            <Flex className=" flex-wrap  justify-between md:justify-center lg:justify-end gap-[75px]">
                <div>
                    <h2 className='mb-[40px]'>Our Story</h2>
                    <p className='max-w-[525px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='max-w-[525px] mt-[24px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div >
                    <img  src={StoryImg} alt="Our Story Image" />
                </div>
            </Flex>
        {/* </Container> */}
    </div>
      
    </>
  )
}

export default OurStory
