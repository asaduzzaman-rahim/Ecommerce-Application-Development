import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`${className} container px-3 md:px-0`}>
      {children}
    </div>
  )
}

export default Container
