import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {

   const quantity = useSelector(getTotalQuantity)

   const totalPrice = useSelector(getTotalPrice)


   if(quantity === 0)
    return null

  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base flex justify-between">
      <p className="text-stone-300 font-semibold flex gap-4  sm:gap-12">
        <span>{quantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to = "/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;


// the two most important properties of tyopgraphy are fontsize and weight

