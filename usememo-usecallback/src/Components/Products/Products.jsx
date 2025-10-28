import React, { useReducer } from 'react'
import products from '../../Data/products'
import './Product.css'
// initial state for cart values 
const initialValue = { quantity: 0 }
// define reducer fn 
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { quantity: 1 }
        case 'INCREMENT':
            return { quantity: state.quantity + 1 }
        case 'DECREMENT':
            return { quantity: state.quantity - 1 }
    }
}
const Products = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <div className='container'>
            <h1>Products</h1>
            <div className='products'>
                {products.map((item) => (
                    <div key={item.id} className='item'>
                        <img src={item.image} />
                        <h4>{item.name}</h4>
                        <p>₹ {item.price}</p>
                        <div className='btn'>
                            <button className='button'>BuyNow</button>
                            {state.quantity === 0 ? (
                                <button
                                    onClick={() => dispatch({ type: 'ADD_TO_CART' })}
                                >AddToCart</button>
                            ) : (
                                <div>
                                    <button
                                    onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
                                    <span>{state.quantity}</span>
                                    <button
                                    onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products