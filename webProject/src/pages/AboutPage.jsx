import Navbar from '../componets/Navbar/Navbar'
import { ThemeProvider } from '../Context/ThemeContext'
import Footer from '../componets/Footer/Footer'

const AboutPage = () => {
  
  return (
    <ThemeProvider>
      <Navbar />
      About page
      <Footer/>
    </ThemeProvider>
  )
}

export default AboutPage;