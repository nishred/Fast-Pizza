import { Link } from 'react-router-dom';

import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>

      <Link to="/menu" className='text-sm text-blue-400 hover:text-blue-600 hover:underline'>&larr; Back to menu</Link>
      <h2>Your cart, %NAME%</h2>

      <div>
        <LinkButton to="/order/new">Order pizzas</LinkButton>
        <Button>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
