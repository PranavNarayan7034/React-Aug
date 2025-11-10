import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Trending from './componets/Trends/Trending'
import { ThemeProvider } from './Context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Trending/>
    </ThemeProvider>
  )
}

export default App