import React from 'react'
import './ProductCard.scss'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ name, image, Offerprice,Actualprice}) => {
    return (
        <div className='product'>
                <div className='imgbox'>
                    <img src={image} alt="" />
                </div>
                <div className='info'>
                    <p>{name}</p>
                    <span>
                        <p>₹{Offerprice}</p>
                        <p>₹{Actualprice}</p>
                    </span>
            </div>
            <div className='ratings'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar />
                <FaStarHalfAlt/>
            </div>
                <div className='btns'>
                    <button>AddToCart</button>
                    <button>BuyNow</button>
                </div>
            </div>
    )
}

export default ProductCard