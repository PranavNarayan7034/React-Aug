import React, { useMemo, useState } from 'react'
const CartCalculator = () => {
    const [cartItems,setCartItems] = useState([])
    // console.log("MyCart ==",cartItems)
    const totalPrice = useMemo(() => {
        return cartItems.reduce( (acc,item)=> acc + item.price, 0)
    }, [cartItems])
    
    // if total price is below 300 (10% discount), 300-1000(15%) - 1000above (20%)

    const discountPrice = useMemo(() => {
        if (totalPrice < 300) { 
            return totalPrice * 0.9
        }
        else if (totalPrice >= 300 & totalPrice < 1000) { 
            return totalPrice * 0.85
        }
        else {
            return totalPrice * 0.8
        }
    }, [cartItems])




    return (
        <div>
            <h2>My Cart</h2>
            <div>
                {cartItems.map( (item,index)=> <p key={index}>Name -- {item.name} : Price --{item.price}</p> )}
            </div>

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

            <p>Total Price :  ₹ {totalPrice}</p>
            <p>Discount Price :  ₹ {discountPrice}</p>
        </div>
    )
}
export default CartCalculator



// a = [10, 20, 30, 40, 50, 60, 70] 
// reduce : find a single value from array (sum/avg/min/max/count)
// a.reduce( Callback,intital value)

// let out = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// firstcase : accumulator = 0 , currentValue = 10   --> 0 +10 = 10 
// secondcase: accumulator = 10, currentValue = 20  -- > 10 + 20   =30 
// thirdcase: accumulator = 30, currentValue = 30  -- > 30 + 30 = 60
//     ..
//     lastcase : accumulator = 210, currentValue = 70   -- > 210 + 70 = 280 
