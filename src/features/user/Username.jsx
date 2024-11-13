import { useSelector } from "react-redux";

const Username = () => {
  const username = useSelector((state) => {
    return state.user.username;
  });

   if(!username)
    return null

  return <p className="hidden text-sm font-semibold sm:block">{username}</p>;
};

export default Username;
