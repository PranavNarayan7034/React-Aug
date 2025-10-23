import React, { useCallback, useMemo, useState } from 'react'
import MemoComp from './Components/MemoComp'
import SearchProduct from './Components/SearchProduct/SearchProduct'
import CartCalculator from './Components/CartCalulator/CartCalculator'
import CallbackComp from './Components/CallbackComp/CallbackComp'
import TodoList from './Components/TodoList/TodoList'
import Usereducer from './Components/Usereducer/Usereducer'

const App = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(5)
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
  const onBtnclick = useCallback(() => {
    console.log("Button clicked")
  },[])

  return (
    <div>
      <MemoComp newcount={newCount} User={user}/>
      <hr/>
      <h3>Count : {count}</h3>
      <h3>CartCount : {newCount}</h3>
      <button onClick={onHandleClick}>Increment</button>
      <button onClick={onButtonClick}>AddValue</button>
      <hr/>
      {/* <SearchProduct /> */}
      <hr />
      {/* <CartCalculator /> */}
      <hr />
      <CallbackComp handleClick={onBtnclick} newcount={newCount}/>
      <hr />
      <TodoList />
      <hr />
      <Usereducer/>
    </div>
  )
}

export default App