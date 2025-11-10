import React from 'react'
import './ProductCard.scss'

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
                <div>
                    <button>AddToCart</button>
                    <button>BuyNow</button>
                </div>
            </div>
    )
}

export default ProductCard