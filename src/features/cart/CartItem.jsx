import { formatCurrency } from "../../utils/helpers";

import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch()

  return (
    <li className="py-3">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>

        <div className="flex gap-2">

        <UpdateItemQuantity id={pizzaId} quantity={quantity} />

        <Button onClick={() =>{

            dispatch(removeItem(pizzaId))


        }}  type="secondary">Delete</Button>

        </div>
      </div>
    </li>
  );
}

export default CartItem;
