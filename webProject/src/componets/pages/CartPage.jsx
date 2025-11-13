import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ThemeProvider } from '../../Context/ThemeContext'
import MyCart from '../MyCart/MyCart'
  
const CartPage = () => {
  return (
    <ThemeProvider>
      <Navbar/>
      <MyCart/>
    </ThemeProvider>
  )
}

export default CartPage