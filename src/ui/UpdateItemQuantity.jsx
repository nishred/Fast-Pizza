import { useDispatch } from "react-redux";

import { FaMinusCircle } from "react-icons/fa";

import { FaCirclePlus } from "react-icons/fa6";
import { decreaseItemQuantity } from "../features/cart/cartSlice";

import { increaseItemQuantity,removeItem } from "../features/cart/cartSlice";

const UpdateItemQuantity = ({id,quantity}) => {

 const dispatch = useDispatch()
 
  return (
    <div className="flex items-center gap-2">
      <FaMinusCircle
        onClick={() => {
           
            dispatch(decreaseItemQuantity(id))

        }}
      />

      <span className="font-semibold">{quantity}</span>

      <FaCirclePlus
        onClick={() => {
          dispatch(increaseItemQuantity(id));
        }}
      />
    </div>
  );
};

export default UpdateItemQuantity;
