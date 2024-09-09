import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=useCart()
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const handleRouteClick = (path) => {
    setActivePath(path);
  };

  const navOptions = (
    <>
      <li
        className={`border-b-2 ${
          activePath === "/" ? "border-blue-500" : "border-transparent"
        }`}
      >
        <Link to="/" onClick={() => handleRouteClick("/")}>
          Home
        </Link>
      </li>
      <li
        className={`border-b-2 ${
          activePath === "/menu" ? "border-blue-500" : "border-transparent"
        }`}
      >
        <Link to="/menu" onClick={() => handleRouteClick("/menu")}>
          Menu
        </Link>
      </li>

      <li
        className={`border-b-2 ${
          activePath === "/order/salad"
            ? "border-blue-500"
            : "border-transparent"
        }`}
      >
        <Link
          to="/order/salad"
          onClick={() => handleRouteClick("/order/salad")}
        >
          Order
        </Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className=" btn-ghost flex gap-2">
            <FaCartPlus />

            <div className="badge badge-secondary">+{ cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogOut} className="">
            Logout
          </button>
        </>
      ) : (
        <>
          <li
            className={`border-b-2 ${
              activePath === "/Login" ? "border-blue-500" : "border-transparent"
            }`}
          >
            <Link to="/Login" onClick={() => handleRouteClick("/Login")}>
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Food Dokan</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
