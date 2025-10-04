import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

export default function Header({ orders, onDelete}) {
    const sum = orders.reduce((total, el) => total + el.price * (el.count || 1), 0)
    let [cartOpen, setCartOpen] = useState(false)
//function for displaying items in the  cart
    const showOrders = () => {
    return (
        <div>
        {orders.map(el => (
            <Order key={el.id} item={el} onDelete={onDelete} />
        ))}
        <p className='sum'>Sum: {sum.toFixed(2)}$</p>
    </div>
    )
}
//function to display empty cart
const showNothing = () => {
    return (
        <div className='empty'>
        <h2>No items in your cart</h2>
    </div>
    )
}

    return(
        <header>
            <div>
                <span className='logo'>Coffee and More...</span>
                <ul className='nav'>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Account</li>
                    <li>Cart</li>
                </ul>
                <FaShoppingCart 
                    onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen ? 'active' : ''}`}/>
            
                {cartOpen && (
                    <div className='shop-cart'>
                        {orders.length > 0 ?
                            showOrders() : showNothing()}
                    </div>
                )}
            </div>
            <div className='banner'></div>  
        </header>
    );
}

