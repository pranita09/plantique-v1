import "./ProductCard.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/auth-context";

const ProductCard = ({ product, addedToWishlist }) => {
  const { addToWishlist, removeFromWishlist, isPresentInWishlist } =
    useWishlist();
  const { addToCart, isPresentInCart, navigate, updateQuantityInCart } = useCart();
  const {token} = useAuth();
  const {
    _id,
    title,
    imgSrc,
    price,
    discount,
    starRating,
    inStock,
    fastDelivery,
    onSale,
  } = product;
  return (
    <div className="product-card">
      <Link to={`/product/${_id}`}>
        <div className="product-img">
          <img src={imgSrc} alt={title} />
        </div>
      </Link>
      {onSale && (
        <div className="sale">
          <p>Sale</p>
        </div>
      )}
      <div className="wishlist-btn">
        {isPresentInWishlist(product) === -1 ? (
          <FavoriteBorderRoundedIcon onClick={ token ? () => addToWishlist(product) : () => navigate("/login")} />
        ) : (
          <FavoriteIcon
            className="wishlist-fav-icon"
            onClick={() => removeFromWishlist(product)}
          />
        )}
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        <div className="star">
          <StarRoundedIcon />
          <p className="star-value"> {starRating}</p>
        </div>
        <div className="price-delivery-tags">
          <div className="prices">
            <p className="old-price">₹{price}</p>
            <p className="new-price">₹{discount}</p>
          </div>
          {fastDelivery && (
            <div className="delivery">
              <p>Fast Delivery</p>
            </div>
          )}
        </div>
        {isPresentInCart(product) === -1 ? (
          <button
            className="add-to-cart-btn"
            onClick={ token ? () => addToCart(product): ()=> navigate("/login")}
          >
            Add To Cart
          </button>
        ) : !addedToWishlist ? (
          <button
            className="add-to-cart-btn go-to-cart-btn"
            onClick={() => navigate("/cart")}
          >
            Go To Cart
          </button>
        ) : (
          <button
            className="add-to-cart-btn go-to-cart-btn"
            onClick={() => updateQuantityInCart(product, "increment")}
          >
            Added To Cart +
          </button>
        )}
      </div>
      {!inStock ? (
        <div className="out-of-stock-tag">
          <div>Out of Stock</div>
        </div>
      ) : null}
    </div>
  );
};
export default ProductCard;
