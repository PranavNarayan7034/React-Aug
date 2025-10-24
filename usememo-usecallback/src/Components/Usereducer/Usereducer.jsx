import React, { useReducer, useState } from 'react'

const initialState = { count: 0, cartitems: 5 }

function reducer(state,action) {      //state = { count: 0, cartitems: 5 }, action = {type:"increment"}
    switch(action.type){
        case 'increment':
            return { count: state.count + 1 ,cartitems: 5}
        case 'decrement':
            return { count: state.count - 1 ,cartitems: 5}
        case 'reset':
            return { count: 0 ,cartitems: 5}
    }
}

const Usereducer = () => {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h1>UseReducer Hook</h1>
            <p>My Reducer count : {state.count}</p>
            <p>Cartitems: {state.cartitems}</p>

            <button onClick={ ()=>dispatch({type:"increment"}) }>increment count</button>
            <button onClick={ ()=>dispatch({type:"decrement"}) }>decrement count</button>
            <button onClick={ ()=>dispatch({type:"reset"}) }>reset count</button>
        </div>
    )
}

export default Usereducer