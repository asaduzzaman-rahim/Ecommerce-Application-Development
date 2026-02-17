import React from 'react'

const SecHeading = (props) => {
  return (
    <div>
      <h5 className='border-l-20 border-primary text-primary h-10 flex items-center pl-4 font-semibold font-poppins'>{props.tittle}</h5>
      <h3 className='font-semibold !text-5xl tracking-[4%] pt-6'>{props.heading}</h3>
    </div>
  )
}

export default SecHeading
