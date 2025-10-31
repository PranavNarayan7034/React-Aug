import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import { ThemeProvider } from './Context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      Home
     <Footer/>
    </ThemeProvider>
  )
}

export default App