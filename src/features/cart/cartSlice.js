import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);

    },

    removeItem(state, action) {

      //payload = pizzaId

     state.cart = state.cart.filter((item) => {

         return item.pizzaId !== action.payload

     })

    },

    increaseItemQuantity(state, action) {
   
      //payload = pizzaId
      state.cart = state.cart.map((item) => {

        if(item.pizzaId === action.payload){

          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + item.unitPrice
          }
        }

        return item
      })


    },

    decreaseItemQuantity(state, action) {

      //payload = pizzaId
  
     console.log(state.cart)

      const item = state.cart.find((item) => {

         return item.pizzaId === action.payload
        
      })  
  
          
      if(item.quantity === 1)
      {
 
         cartSlice.caseReducers.removeItem(state, action)

      }
      else
      {
        item.quantity = item.quantity - 1

        item.totalPrice = item.totalPrice - item.unitPrice
      }



    },

    clearCart(state, action) {

       state.cart = []

    },
  },
});


export function getTotalPrice(state)
{

    return state.cart.cart.reduce((acc,item) => {

         return acc + item.totalPrice

    },0)


}


export function getTotalQuantity(state)
{

    return state.cart.cart.reduce((acc,item) => {

         return acc + item.quantity

    },0)

}


export function getCart(state)
{
  return state.cart.cart
}



export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

//whenever possible its best to derive the state
