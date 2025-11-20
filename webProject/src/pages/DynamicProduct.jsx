import React from 'react'
import Navbar from '../componets/Navbar/Navbar'
import { ThemeProvider } from '../Context/ThemeContext'
import Productinfo from '../componets/ProductInfo/Productinfo'
import Footer from '../componets/Footer/Footer'

const DynamicProduct = () => {

  return (
    <ThemeProvider>
      <Navbar />
      <Productinfo />
      <Footer />
    </ThemeProvider>
  )
}

export default DynamicProduct