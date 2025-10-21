import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <div className='carousel'>
            <div class="group">
                <div class="card">Supa Blox</div>
                <div class="card">Hype Blox</div>
                <div class="card">Ultra Blox</div>
                <div class="card">Frame Blox</div>
                <div class="card">Figma</div>
                <div class="card">Canva</div>
            </div>
             <div aria-hidden class="group">
                <div class="card">Supa Blox</div>
                <div class="card">Hype Blox</div>
                <div class="card">Ultra Blox</div>
                <div class="card">Frame Blox</div>
                <div class="card">Figma</div>
                <div class="card">Canva</div>
            </div>
        </div>
    )
}

export default Carousel