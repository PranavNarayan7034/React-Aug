import React from 'react'
import Navbar from '../componets/Navbar/Navbar'
import { ThemeProvider } from '../Context/ThemeContext'
import MyCart from '../componets/MyCart/MyCart'
import Footer from '../componets/Footer/Footer'

const CartPage = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <MyCart />
      <Footer/>
    </ThemeProvider>
  )
}

export default CartPage