import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`${className} flex items-center`}>
      {children}
    </div>
  )
}

export default Flex
