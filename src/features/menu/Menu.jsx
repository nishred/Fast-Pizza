import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

//render as you fetch strategy

// rendering a particular route and fetching data for it happens at the same time

// in the useEffect, the strategy was to render first and then fetch the data

function Menu() {
  const menu = useLoaderData();

  //so here the component waits for the data to arrive before even the first render unlike data fetching in useEffect

  return (
    <ul className="divide-y divide-stone-300">
      {menu.map((item, idx) => {
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            unitPrice={item.unitPrice}
            ingredients={item.ingredients}
            soldOut={item.soldOut}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </ul>
  );
}

export async function loader() {
  

  const menu = await getMenu();

  return menu;
}

export default Menu;


// the divide class works very similar to the space class
