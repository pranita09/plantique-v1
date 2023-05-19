import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <div className="nav-left">
            <img src="/images/logo-img.png" alt="Plantique-logo" />
            <span className="app-name">Plantique</span>
          </div>
        </NavLink>
        <div className="nav-search">
          <SearchOutlinedIcon className="nav-icon search-icon" />
          <input placeholder="Search" />
        </div>
        <div className="nav-right">
          <NavLink to="/store">
            <div className="nav-icon">
              <LocalMallOutlinedIcon />
            </div>
          </NavLink>
          <NavLink to="/login">
            <div className="nav-icon">
              <AccountCircleOutlinedIcon />
            </div>
          </NavLink>
          <NavLink to="/wishlist">
            <div className="nav-icon">
              <FavoriteBorderOutlinedIcon />
              <p>0</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className="nav-icon">
              <ShoppingCartOutlinedIcon />
              <p>0</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navbar;
