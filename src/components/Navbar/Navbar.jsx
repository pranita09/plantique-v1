import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from "../../contexts/auth-context";
import filterTypes from "../../constants/filterTypes";
import { useProducts } from "../../contexts/products-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";

const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { productState, productDispatch } = useProducts();
  const {wishlistState: {wishlist}} = useWishlist();
  const {cartState: {cart}} = useCart();
  const { SEARCH } = filterTypes;

  const activeIconStyles = ({isActive}) => ({
    backgroundColor: isActive ? "lightgrey" : "transparent",
    borderRadius: "50%",
  })

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
          <input
            placeholder="Search"
            value={productState.searchInput}
            onChange={(event) =>
              productDispatch({ type: SEARCH, payload: event.target.value })
            }
            onKeyPress={(event) => event.which === 13 && navigate("/store")}
          />
        </div>
        <div className="nav-right">
          <NavLink style={activeIconStyles} to="/store">
            <div className="nav-icon">
              <LocalMallOutlinedIcon />
            </div>
          </NavLink>
          <NavLink style={activeIconStyles} to="/wishlist">
            <div className="nav-icon">
              <FavoriteBorderOutlinedIcon />
              { token && wishlist.length > 0 && <p>{wishlist.length}</p>}
            </div>
          </NavLink>
          <NavLink style={activeIconStyles} to="/cart">
            <div className="nav-icon">
              <ShoppingCartOutlinedIcon />
              { token && cart.length > 0 && <p>{cart.length}</p>}
            </div>
          </NavLink>
          <NavLink style={activeIconStyles} to={token ? "/profile" : "/login"}>
            <div className="nav-icon">
              { token ? <PersonIcon /> : <LoginOutlinedIcon />}
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navbar;
