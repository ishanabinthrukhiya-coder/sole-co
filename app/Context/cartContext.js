"use client"

import { createContext, useState } from "react"

 export const CartContext=createContext(null);
export function Cartprovider({children}){
const [cart,Setcart]=useState([]);
// product add ceyyan
function addToCart(product){
Setcart((previouscart)=>[...previouscart,product])}
// remove 
function removeFromCart(id){
    Setcart((previouscart)=>previouscart.filter((item)=>item.id !==id))
}
return(
     <CartContext.Provider value={{cart,Setcart,removeFromCart,addToCart}}>
{children}
     </CartContext.Provider>
)
}