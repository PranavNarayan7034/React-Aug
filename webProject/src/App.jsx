import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Trending from './componets/Trends/Trending'
import { ThemeProvider } from './Context/ThemeContext'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <ThemeProvider>
      <Toaster position='top-center'/>
        <Navbar />
        <Hero />
        <Trending />
    </ThemeProvider>
  )
}

export default App