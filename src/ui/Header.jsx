import { Link } from "react-router-dom";
import Username from "../features/user/Username";

import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (

    <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-400 sm:px-6 flex justify-between items-center">
      <Link to="/" className="tracking-widest">
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;


//tracking-widest is to deal with letter spacing