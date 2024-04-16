import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'

const CartItem = ({name,price}) => {
  
    const Cart = useContext(CartContext)
    console.log(Cart)
    
    const handleClick = (name,price) => {
        Cart.setCartItem([...Cart.cartItem,{name,price}])
    }
    return (
    <div>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={()=>handleClick(name,price)}>Add to cart</button>
    </div>
  )
}

export default CartItem