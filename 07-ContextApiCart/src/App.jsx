 import React from 'react'
import CartItem from './components/CartItem'
import Cart from './components/Cart'
 
 const App = () => {
   return (
     <div className='main'>
      <CartItem name={"Mackbook"} price={100000}/>
      <CartItem name={"iphone"} price={90000}/>
      <CartItem name={"Camera"} price={80000}/>
      <CartItem name={"Watch"} price={70000}/>
      <CartItem name={"Headphone"} price={60000}/>


        <Cart/>
  
     
     </div>
   )
 }
 
 export default App