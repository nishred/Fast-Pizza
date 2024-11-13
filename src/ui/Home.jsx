import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import LinkButton from "./LinkButton";


function Home() {

  const username = useSelector((state) => {
    return state.user.username;
  }); 


  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="font-semibold text-xl mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>
 
      {(username === "")?(<CreateUser />):(<LinkButton to={"/menu"}>Conitnue Ordering, {username}</LinkButton>)}

    </div>
  );
} 

export default Home;
