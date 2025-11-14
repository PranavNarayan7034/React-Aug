import { useSelector } from 'react-redux'
import Products from '../../Data/Product'
import './MyCart.scss'
import { HashLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { incrementCount,decrementCount } from '../../redux/cartReducer'

const MyCart = () => {
    const dispatch = useDispatch()
    const { cartItems, cartCount } = useSelector((state) => state.Cart)
    const cart = cartItems.map(item => {
        const product = Products.find(prod => prod.id === item.id)
        return { ...product, count: item.count }
    })
    if (cartCount == 0) {
        return (
            <div className="emptycart">
                <h2>Your Cart Is Empty</h2>
                <HashLink smooth to="/#Products"
                    className='button'>
                    Purchase Now
                </HashLink>
            </div>
        )
    }
    return (
        <div className='cartpage'>
            <h2>Your Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>ProductName</th>
                        <th>Quantity</th>
                        <th>ActualPrice</th>
                        <th>OfferPrice</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.image}alt="" /></td>
                            <td>{item.name}</td>

                            <td className='count'>
                                <div className='btns'>
                                    <button onClick={() =>
                                        dispatch(decrementCount(item.id))}
                                    >-
                                    </button>
                                    <p>{item.count}</p>
                                    <button onClick={() =>
                                        dispatch(incrementCount(item.id))}
                                    >+
                                    </button>
                                </div>
                            </td>

                            <td>₹ {item.price * item.count}</td>
                            <td>₹ {item.offerPrice * item.count}</td>
                            <td>remove ❌</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MyCart