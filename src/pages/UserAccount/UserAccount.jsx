import "./UserAccount.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const UserAccount = () => {
  const location = useLocation();
  const isActiveProfile = location.pathname === "/profile";
  document.title = "User Profile | Plantique";

  return (
    <div className="page-wrapper">
      <section className="user-account-container">
        <h2 className="user-account-heading">My Account</h2>
        <div className="account-wrapper">
          <div className="account-tabs">
            <NavLink
              to="/profile"
              className={isActiveProfile ? "active-tab" : ""}
            >
              Profile
            </NavLink>
            <NavLink
              to="/profile/addresses"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Addresses
            </NavLink>
            <NavLink
              to="/profile/orders"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Orders
            </NavLink>
          </div>
          <div className="account-data">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserAccount;
