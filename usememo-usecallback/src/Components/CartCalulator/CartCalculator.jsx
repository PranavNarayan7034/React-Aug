import React, { useState } from 'react'

const CartCalculator = () => {

    const [cartItems,setCartItems] = useState([])
    console.log("MyCart ==",cartItems)
    return (
        <div>
            <h2>My Cart</h2>
            <p>
                {cartItems.map( (item)=> <div>Name -- {item.name} : Price --{item.price}</div> )}
            </p>

            <button onClick={() =>
            { setCartItems([...cartItems, { id: 1, name: "Mango", price: 80 }]) }}>
                Add Mango
            </button>

            <button onClick={() => {
                setCartItems([...cartItems, { id: 2, name: "Apple", price: 200 }])
            }}>
                Add Apple</button>

            <button onClick={() =>
            { setCartItems([...cartItems, { id: 3, name: "Orange", price: 120 }]) }}>
                Add Orange</button>

            <p>Total Price : 0</p>
            <p>Discount Price : 0</p>
        </div>
    )
}

export default CartCalculator