import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ThemeProvider } from '../../Context/ThemeContext'

const Aboutpage = () => {
  return (
      <ThemeProvider>
          <Navbar/>
          Aboutpage
      </ThemeProvider>
  )
}

export default Aboutpage