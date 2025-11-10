import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incrementCount ,addToCart } from '../../redux/cartReducer'

const Cart = () => {

    const dispatch = useDispatch()
    const {cartCount,cartItems} = useSelector((state)=> state.Cart)

    console.log("MyCart Count ==", cartCount)
    
    console.log("CartItems ==", cartItems)

    return (
        <div>
            <h1>Cart page</h1>
            <button
                onClick={()=> dispatch(incrementCount())}
            >IncreaseCartCount</button>
            

            <button
                onClick={()=> dispatch(addToCart('MobilePhone'))}
            >
                AddToCart
            </button>
            
        </div>
    )
}

export default Cart