import { Link } from "react-router-dom";

const Button = ({children,disabled,to}) => {

  
   const className =
     "mt-4 inline-block rounded-full bg-yellow-300 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 disabled:cursor-not-allowed"; 


   if(to)
    return (
     <Link to = {to} className = {className}>{children}</Link>
    )


  return (
    <button
      disabled={disabled}
      className ={className}
    >
      {children}
    </button>
  );



}

export default  Button