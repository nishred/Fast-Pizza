import { formatCurrency } from "../../utils/helpers";

import Button from "../../ui/Button";

import { addItem, decreaseItemQuantity, increaseItemQuantity, removeItem } from "../cart/cartSlice";
import { useState, useSyncExternalStore } from "react";



import { useDispatch, useSelector } from "react-redux";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";


function MenuItem({ id,name,unitPrice,ingredients,soldOut,imageUrl }) {


  const dispatch = useDispatch()


  const quantity = useSelector((state) => {

       return state.cart.cart.find((item) => {

           return item.pizzaId === id

       })?.quantity


  })


  const showConfirm = (quantity)?(true):(false)



  function handleAddToCart(){

      
     dispatch(addItem({

         pizzaId : id,
         name,
         quantity  : 1,
         unitPrice,
         totalPrice : unitPrice

     }))



  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?("opacity-70 grayscale"):("")}`} />
      <div className="grow flex flex-col">
        <p className="text-stone-800">{name}</p>
        <p className="capitalize text-stone-500 italic">{ingredients.join(', ')}</p>
        <div className="flex justify-between items-center mt-auto">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {!soldOut && !showConfirm && <Button onClick={handleAddToCart} type={"secondary"}>Add to cart</Button>}
          {showConfirm && (
           
            <div className="flex gap-4 items-center">

             <UpdateItemQuantity id={id} quantity={quantity}/>

            <Button onClick={() => {

              dispatch(removeItem(id))
            }} type={"secondary"}>Delete</Button>

            </div>

          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
