import React from 'react'

const Button = ({children, className}) => {
  return (
    <div className={`${className} text-white bg-[#db4444] py-[16px] px-[48px] cursor-pointer text-[16px] font-medium text-center inline-block`}>
      {children}
    </div>
  )
}

export default Button
