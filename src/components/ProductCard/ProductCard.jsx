import "./ProductCard.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/auth-context";
import { useProducts } from "../../contexts/products-context";

const ProductCard = ({ product, addedToWishlist }) => {
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToWishlist, removeFromWishlist, itemInWishlist } = useWishlist();
  const { addToCart, updateQuantityInCart, itemInCart } = useCart();
  const { token } = useAuth();
  const {
    _id,
    title,
    imgSrc,
    price,
    updatedPrice,
    starRating,
    inStock,
    fastDelivery,
    onSale,
  } = product;

  return (
    <div className="product-card">
      <Link to={`/product/${_id}`}>
        <div className="product-img">
          <img src={imgSrc} alt={title} onClick={() => getProductById(_id)} />
        </div>
      </Link>
      {onSale && (
        <div className="sale">
          <p>Sale</p>
        </div>
      )}
      <div className="wishlist-btn">
        {token && itemInWishlist(_id) ? (
          <FavoriteIcon
            className="wishlist-fav-icon"
            onClick={() => removeFromWishlist(product)}
          />
        ) : (
          <FavoriteBorderRoundedIcon
            onClick={
              token ? () => addToWishlist(product) : () => navigate("/login")
            }
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
            <p className="new-price">₹{updatedPrice}</p>
          </div>
          {fastDelivery && (
            <div className="delivery">
              <p>Fast Delivery</p>
            </div>
          )}
        </div>
        {!addedToWishlist ? (
          <button
            className="add-to-cart-btn"
            onClick={() =>
              token
                ? itemInCart(_id)
                  ? navigate("/cart")
                  : addToCart(product)
                : navigate("/login")
            }
          >
            {token && itemInCart(_id) ? "Go to Cart" : "Add To Cart"}
          </button>
        ) : itemInCart(_id) ? (
          <button
            className="add-to-cart-btn go-to-cart-btn"
            onClick={() => updateQuantityInCart(product, "increment")}
          >
            Added To Cart +
          </button>
        ) : (
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
      {!inStock ? (
        <Link to={`/product/${_id}`}>
          <div className="out-of-stock-tag">
            <div onClick={() => getProductById(_id)}>Out of Stock</div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};
export default ProductCard;
