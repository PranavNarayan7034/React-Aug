import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Trending from './componets/Trends/Trending'
import { ThemeProvider } from './Context/ThemeContext'
import { Toaster } from 'react-hot-toast'
import Footer from './componets/Footer/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <Toaster position='top-center'/>
      <Navbar />
      <Hero />
      <Trending />
      <Footer/>
    </ThemeProvider>
  )
}

export default App