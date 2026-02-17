import React from 'react'

const CategoryCart = (props) => {
  return (
    <div className='w-[170px]  py-[24px] border-1 rounded-[4px] '>
        <img className='h-[56px] w-[56px] mx-auto ' src={props.CategoryImg} alt="Category Image" />   
        <h5 className='text-[16px] font-poppins leading-[24px] text-center pt-[16px] '>{props.tittle}</h5> 
    </div> 
    
  )
}

export default CategoryCart
