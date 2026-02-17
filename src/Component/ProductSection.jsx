import React from 'react'
import Container from './Container'
import SecHeading from './SecHeading'
import Button from './Button'
import Flex from './Flex'

const ProductSection = () => {
  return (
    <>
        <section className="mt-[70px] mb-[140px]">
            <Container>
                <Flex className="justify-between items-end">
                    <SecHeading tittle="This Month " heading="Best Salling Products" />  
                    <Button>View All</Button>  
                </Flex> 
                <Flex>
                        
                </Flex>   
            </Container>            
        </section> 
    </>
  )
}

export default ProductSection
