import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  addItems
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList />
                 Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers/>
                All Users
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
