import React from 'react'
import './Trending.scss'

const Trending = () => {
    return (
        <div className='container'>
            <h3>Trending collections</h3>
            <h1>Our <span>Trending</span> Models</h1>
            <div className="options">
                <span className='active'>New arivals</span>
                <span>Best seller</span>
                <span>Summer collections</span>
                <span>Accessories</span>
                <span>Essentials</span>
            </div>
            
        </div>
    )
}

export default Trending;