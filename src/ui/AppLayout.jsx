import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {

   const navigation = useNavigation()

   //console.log(navigation)

   const isLoading = (navigation.state === "loading")

   console.log(navigation)


  return (
    <div className="layout h-screen grid  grid-rows-[auto_1fr_auto]">

      <Loader />

      <Header />
      <div className="overflow-auto">
      <main className="max-w-3xl mx-auto">
        <Outlet />
      </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
