import React from 'react'
import Navbar from '../componets/Navbar/Navbar'
import { ThemeProvider } from '../Context/ThemeContext'
import MyCart from '../componets/MyCart/MyCart'


const CartPage = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <MyCart />
    </ThemeProvider>
  )
}

export default CartPage