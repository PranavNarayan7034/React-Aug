import React, { useState } from 'react'
import './Trending.scss'
import ProductCard from '../ProductCard/ProductCard'
import Products from '../../Data/Product.js'
import { useSelector } from 'react-redux'

const Trending = () => {

    const { cartItems, cartCount } = useSelector((state) => state.Cart)
    console.log("My cart items==", cartItems)
    console.log("MyTotal CartCount==", cartCount)

    const [selectedCategory, setSelectedCategory] = useState('New arrivals')
    const Categories = ["New arrivals", "Best seller", "Summer collections",
        "Accessories", "Essentials"
    ]

    const filterdProducts = Products.filter((item) =>
        item.category.toLowerCase() === selectedCategory.toLowerCase())

    return (
        <div className='container'>
            <h3>Trending collections</h3>
            <h1>Our <span>Trending</span> Models</h1>
            <div className="options">
                {Categories.map((category, index) => (
                    <span key={index}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}
                    >{category}</span>
                ))}
            </div>

            <div className="products">
                {filterdProducts.map((item, index) => (
                    <ProductCard key={index}
                        id = {item.id}
                        name={item.name}
                        image={item.image}
                        Actualprice={item.price}
                        Offerprice={item.offerPrice}
                    />
                ))}
            </div>

        </div>
    )
}

export default Trending;