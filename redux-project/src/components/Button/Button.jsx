import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Login ,Logout} from '../../redux/authReducer'

const Button = () => {

  // const authValues = useSelector( (state)=> state.Auth)
  // console.log("Auth ==", authValues)

  // const cartValues = useSelector((state) => state.Cart)
  // console.log("Cart ==", cartValues)

  const { userId, username, isAdmin } = useSelector((state) => state.Auth)
  // console.log(isAdmin)

  const dispatch = useDispatch()


  return (
    <div>
      <button onClick={ ()=> dispatch(Login())}> Signin</button>
      <button onClick={ ()=> dispatch(Logout())}> Logout</button>
    </div>
  )
}

export default Button