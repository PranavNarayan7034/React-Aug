import React, { useMemo, useState } from 'react'
import MemoComp from './Components/MemoComp'
import SearchProduct from './Components/SearchProduct/SearchProduct'
import CartCalculator from './Components/CartCalulator/CartCalculator'

const App = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(5)
  
  // const user = {"Name":"John","isAdmin":true}
  
  const onHandleClick = () => {
    setCount(count+1)
  }
  const onButtonClick = () => {
    setNewCount(newCount+10)
  }

  const user = useMemo(() => {
    return {
      "Name": "John", "isAdmin": true,
      "CartCount":newCount
    }
  },[newCount])
  console.log("App component Rendered")

  return (
    <div>
      <MemoComp newcount={newCount} User={user}/>
      <hr/>
      <h3>Count : {count}</h3>
      <h3>CartCount : {newCount}</h3>
      <button onClick={onHandleClick}>Increment</button>
      <button onClick={onButtonClick}>AddValue</button>
      <hr/>
      <SearchProduct />
      <hr />
      <CartCalculator/>
    </div>
  )
}

export default App