import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const cartItems = JSON.parse(localStorage.getItem('ItemsInCart'));
   const [details,setDetails] = useState(cartItems)
  //  const [count,setCount] = useState(0)
  // console.log(cartItems.length)
   const [Totalitems,setTotalItems] = useState(cartItems)
  

  return (
      <CartContext.Provider value={{ cartItems,details,setDetails,Totalitems,setTotalItems }}>
        {children}
      </CartContext.Provider>
  );
};

export default CartContextProvider;
