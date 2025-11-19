import React from 'react'
import Navbar from '../componets/Navbar/Navbar'
import { ThemeProvider } from '../Context/ThemeContext'
import Productinfo from '../componets/ProductInfo/Productinfo'

const DynamicProduct = () => {
    
  return (
      <ThemeProvider>
          <Navbar />
          
          <Productinfo/>
          
      </ThemeProvider>
  )
}

export default DynamicProduct