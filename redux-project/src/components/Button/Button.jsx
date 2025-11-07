import React from 'react'
import { useSelector } from 'react-redux'

const Button = () => {

  const values = useSelector( (state)=> state.Auth)
  console.log("Value", values)

  return (
    <div>
      Button
    </div>
  )
}

export default Button