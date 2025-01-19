import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    if (!isAuthenticated) {
      navigate("/register");
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex flex-row justify-center gap-12 p-6 bg-gray-700 text-orange-600">
        <NavLink
          className="hover:bg-orange-600 hover:text-white p-1 rounded-lg"
          to="/create"
        >
          Create Book
        </NavLink>
        <NavLink
          className="hover:bg-orange-600 hover:text-white p-1 rounded-lg"
          to="/wishlist"
        >
          Wish List
        </NavLink>
        <NavLink
          className="hover:bg-orange-600 hover:text-white p-1 rounded-lg"
          to="/completed"
        >
          Completed
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
