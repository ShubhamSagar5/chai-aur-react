import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../context/Cart'

const Cart = () => {
  
    const CartItem = useContext(CartContext)
    console.log(CartItem)

    const totalPrice = CartItem.cartItem.reduce((a,b)=>a+b.price,0)
    return (
    <div>
        <h2>CartList</h2>
        <ul>
            {
                CartItem.cartItem?.map((item)=> 
                (
                    <li>{item.name} --{item.price}</li>
                ))
            }
        </ul>

        <h2>Total = {totalPrice}</h2>
    </div>
  )
}

export default Cart