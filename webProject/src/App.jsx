import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import { ThemeProvider } from './Context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero/>
    </ThemeProvider>
  )
}

export default App