import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.scss'
import Bg1 from '../../assets/Herowallpaper1.jpg'
import Bg2 from '../../assets/Herowallpaper2.jpg'
import Bg3 from '../../assets/Herowallpaper3.jpg'
import Bg4 from '../../assets/Herowallpaper4.jpg'

const Hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const background = [Bg1, Bg2, Bg3, Bg4]
    const Headings = ['Level up your Style', 'Upgrade Your Vibe',
        'Elevate Everyday Elegance', 'Discover Refined Style']
    const brands = ["Brand1", "Brand2", "Brand3", "Brand4"]

    // auto slide for hero page
    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % background.length)
        }, 5000)
        return () => clearInterval(interval)

    }, [])
    // console.log("Current slide", currentSlide)

    return (
        <div className='Hero'
            style={{ backgroundImage: `url(${background[currentSlide]})` }}>

            <div class="first">
                <h3>Summer Collection</h3>

                <AnimatePresence mode='wait'>
                    <motion.h1
                        key={currentSlide}
                        initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        exit={{opacity:0,scale:0}}
                        transition={{duration:0.75,ease:"linear"}}
                    >{Headings[currentSlide]}</motion.h1>
                </AnimatePresence>

            </div>

            <div class="second">555555555</div>
        </div>
    )
}

export default Hero