import React, { useReducer, useState } from 'react'

const initialState = { count: 0, cartitems: 5 }
function reducer() {
    
}

const Usereducer = () => {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h1>UseReducer Hook</h1>
            <p>My Reducer count : {state.count}</p>
            <p>Cartitems: {state.cartitems}</p>
        </div>
    )
}

export default Usereducer