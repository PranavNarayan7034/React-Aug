import React from 'react'
import './Trending.scss'
import ProductCard from '../ProductCard/ProductCard'
import Tshirt from '../../assets/Products/Tshirt.png'

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
            <div className="products">
                <ProductCard name="Tshirt" image={Tshirt} Actualprice={799} Offerprice={699}/>
                <ProductCard name="Cap" image={Tshirt} Actualprice={599} Offerprice={549}/>
                <ProductCard name="goggle" image={Tshirt} Actualprice={999} Offerprice={799}/>
            </div>
        </div>
    )
}

export default Trending;