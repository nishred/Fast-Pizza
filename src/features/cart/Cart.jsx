import { Link } from 'react-router-dom';

import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';


import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearCart, getCart } from './cartSlice';

import EmptyCart from "./EmptyCart"


function Cart() {
  const cart = useSelector(getCart)
  

  const username = useSelector((state) => {
 
    return state.user.username

  })

  const dispatch = useDispatch()

  if(!cart?.length)
    return <EmptyCart />

  return (
    <div>
      <Link to="/menu" className='text-sm text-blue-400 hover:text-blue-600 hover:underline'>&larr; Back to menu</Link>
      <h2 className='mt-7 font-semibold text-xl'>Your cart, {username}</h2>


      <ul className='mt-3 divide-y divide-stone-200 border-b'>
       {cart.map((item) => {

           return (

               <CartItem item={item} key = {item.key} />

           )
       })}
       </ul>

      <div className='mt-6 space-x-2'>
        <LinkButton to="/order/new">Order pizzas</LinkButton>
        <Button onClick={() => {

             dispatch(clearCart())
        }}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
