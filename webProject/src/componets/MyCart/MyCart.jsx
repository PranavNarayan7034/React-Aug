import { useSelector } from 'react-redux'
import Products from '../../Data/Product'
import './MyCart.scss'

const MyCart = () => {
    const {cartItems,cartCount} = useSelector( (state)=> state.Cart)
    const cart = cartItems.map(item => {
        const product = Products.find(prod => prod.id === item.id)
        return {
            ...product,count:item.count
        }
    })
    console.log(cart)
    if (cartCount == 0) {
        return (
            <div className="emptycart">
                <h2>Your Cart Is Empty</h2>
                <button className='button'>
                    Purchase Now
                </button>
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
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item,index) => (
                        <tr key={index}>
                            <td><img src={item.image}
                                alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>₹ {item.price}</td>
                            <td>₹ {item.offerPrice}</td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    )
}

export default MyCart