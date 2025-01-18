import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-center gap-12 p-6 bg-gray-700 text-orange-600">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/wishlist">Wish List</NavLink>
      <NavLink to="/about">Completed</NavLink>
    </div>
  );
};

export default NavBar;
