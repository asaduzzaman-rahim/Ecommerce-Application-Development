import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`${className} container px-3 sm:!px-0 overflow-hidden`}>
      {children}
    </div>
  )
}

export default Container
