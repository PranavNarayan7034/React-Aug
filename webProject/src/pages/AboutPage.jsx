import Navbar from '../componets/Navbar/Navbar'
import { ThemeProvider } from '../Context/ThemeContext'

const AboutPage = () => {
  return (
    <ThemeProvider>
      <Navbar />
      About page
    </ThemeProvider>
  )
}

export default AboutPage;