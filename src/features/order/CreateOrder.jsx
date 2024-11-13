import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {

  // const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation()

  const isSubmitting = (navigation.state === "submitting")

  const formErrors = useActionData()

  // We wired this component with the action. so in this component we can get access to the data that is returned by the action

  const cart = fakeCart;

  //form methods can be patch,put and delete as well but not get

  const styling = {

    parentStyle : "flex flex-col sm:flex-row sm:justify-between",
    inputStyle : "py-2 rounded-full sm:grow focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 transition-all duration-300 sm:max-w-xl border border-stone-300"

  }


  return (
    <div className="px-4 mt-8">
      <h2 className="text-xl font-semibold tracking-widest">Ready to order? Let's go!</h2>

      <Form method = "POST" className="mt-8 space-y-4"> 

        <div className={styling.parentStyle}>
          <label>First Name</label>
          <input type="text" name="customer" required className={styling.inputStyle} />
        </div>

        <div className={styling.parentStyle}>
          <label>Phone number</label>
          
            <input type="tel" name="phone" required className={styling.inputStyle}/>
          

          {formErrors?.phone && <span>{formErrors.phone}</span>}
        </div>

        <div className={styling.parentStyle}>
          <label>Address</label>
          
            <input type="text" name="address" required className={styling.inputStyle}/>
          
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className = "h-6 w-6 focus:outline-none focus:ring focus:ring-offset-2 accent-yellow-300"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
           <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <Button disabled={isSubmitting}>{isSubmitting?("Submitting..."):("Order Now")}</Button> 
        </div>
      </Form>
    </div>
  );
}


export async function action({request})
{
    const formData = await request.formData()

    const data = Object.fromEntries(formData)

    const errors = {}   // errros is an object with key value pairs
    

    if(!isValidPhone(data.phone))
    {
      errors.phone = "Invalid phone number"
    }

    if(Object.keys(errors).length > 0)
    {
      return errors
    }

    const order = {
     ...data,
     priority : data.priority === "on",
      cart : JSON.parse(data.cart)
    }


    //If everything is ok then create a new order and redirect to the order page

    const newOrder = await createOrder(order)

   return redirect(`/order/${newOrder.id}`)

   // here we cant use the navigate from useNavigate as this is not a component. hooks can only be used inside React components or custom hooks
   
}

//as soon as the special Form component is sumbitted, the request will be intercepted by the action function

export default CreateOrder;

// notice how the entire form is working without creating any state variables and we didnt use any js


// there is a nice way of getting the data into the form field without it being a form input field
// using a hidden input field


// const navigation = useNavigation()

// the navigation state can be "idle" | "loading" | "submitting"

// idle indicates no active navigation is happening

// loading indicates data is being fetched, so it will be useful to show a loading spinner

// submitting indicates that the form is being submitted, so it will be useful to show a loading spinner and disbling the form input fields and buttons




