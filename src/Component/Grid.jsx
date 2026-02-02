import React from 'react'

const Grid = ({children, className}) => {
  return (
    <div className={`${className} grid items-center`}>
      {children}
    </div>
  )
}

export default Grid
