import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`${className} container px-3`}>
      {children}
    </div>
  )
}

export default Container
