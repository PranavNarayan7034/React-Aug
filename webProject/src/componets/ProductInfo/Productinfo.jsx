import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../Data/Product';
import './Productinfo.scss'

const Productinfo = () => {
    const { name } = useParams();
    const product = Products.find((prod) =>
        prod.name.toLowerCase() == name.toLowerCase())

    // console.log(product)
    
    return (
        // <div>Productinfo : {name}</div>

        <div className='product'>
            <h1>{product.name}</h1>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
        </div>
    )
}

export default Productinfo