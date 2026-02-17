import React from 'react'
import Container from './Container'
import Flex from './Flex'
import SecHeading from './SecHeading'
import CategoryCart from './CategoryCart'
import PhoneImg from "../assets/Category-CellPhone@3x.png"
import ComputerImg from "../assets/Category-Computer.png"
import SmartWatch from "../assets/Category-SmartWatch.png"
import Cemera from "../assets/Category-Camera.png"
import Headphone from "../assets/Category-Headphone.png"
import Gameimg from "../assets/Category-Gamepad.png"

const Category = () => {
  return (
    <>
        <section className='mb-4'>
            <Container>
                <div className='pt-[80px] pb-[70px] border-t-1 border-b-1 border-[#b3b3b3]'>
                    <SecHeading tittle="Category " heading="Browse By Category" />
                    <Flex className='mt-[60px] gap-[30px]'>
                        <CategoryCart CategoryImg={PhoneImg} tittle="Phone" />
                        <CategoryCart CategoryImg={ComputerImg} tittle="Computer" />
                        <CategoryCart CategoryImg={SmartWatch} tittle="SmartWatch" />
                        <CategoryCart CategoryImg={Cemera} tittle="Cemera" />
                        <CategoryCart CategoryImg={Headphone} tittle="Headphone" />
                        <CategoryCart CategoryImg={Gameimg} tittle="Gaming" />
                    </Flex>
                </div>    
            </Container>        
        </section> 
    </>
  )
}

export default Category
