import React from 'react'
import products from '../../Data/products'
import './Product.css'

const Products = () => {
    return (
        <div className='container'>
            <h1>Products</h1>
            <div className='products'>
                {products.map( (item) => (
                    <div key={item.id} className='item'>
                        <img src={item.image} />
                        <h4>{item.name}</h4>
                        <p>₹ {item.price}</p>
                        <div className='btn'>
                            <button>BuyNow</button>
                            <button>AddToCart</button>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default Products