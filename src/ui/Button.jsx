import { Link } from "react-router-dom";

const Button = ({children,disabled,to,type,onClick,className}) => {

  
   const classStyle =
     `inline-block rounded-full bg-yellow-300 px-4 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 disabled:cursor-not-allowed ${className}`; 


     const styles = {

       primary : `${classStyle} py-3`,
       secondary  : `${classStyle} py-2`,
       tertiary : `${classStyle} py-1`

     }


   if(to)
    return (
     <Link to = {to} className = {type?(styles[type]):(styles["primary"])}>{children}</Link>
    )


  return (
    <button
      onClick = {onClick}
      disabled={disabled}
      className ={type?(styles[type]):(styles["primary"])}
    >
      {children}
    </button>
  );



}

export default  Button