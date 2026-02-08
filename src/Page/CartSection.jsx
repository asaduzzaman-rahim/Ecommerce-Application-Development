import React from 'react'
import Container from '../Component/Container'

const CartSection = () => {
  return (
    <>
      <div className='pb-[140px] '>
        <Container>
            <div className='py-[80px] '>
                <span>Home / Cart</span>
            </div>
            <div>
                <table className="w-full text-sm text-left rtl:text-right text-body">
                  <thead className="text-sm text-body bg-neutral-secondary-medium border-1 border-indigo-200 ">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-s-base font-bold w-[40%]">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] font-bold w-[20%]">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-e-base font-bold w-[20%]">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-e-base font-bold w-[20%]">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                </table>
            </div>
        </Container>
      </div>
    </>
  )
}

export default CartSection
