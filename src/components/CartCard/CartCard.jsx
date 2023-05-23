import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "./CartCard.css";
import { Link } from "react-router-dom";

const CartCard = ({ cartProduct }) => {
  const { addToWishlist, isPresentInWishlist } = useWishlist();
  const { removeFromCart } = useCart();
  const { _id, title, imgSrc, discount, qty } = cartProduct;

  return (
    <div className="cart-card-wrapper card-horizontal">
      <div className="card-row">
        <img src={imgSrc} alt={title} className="cart-card-img" />
        <div className="cart-card-body">
          <Link to={`/product/${_id}`}>
            <p className="cart-card-title">{title}</p>
          </Link>
          <div className="cart-card-content">
            <div className="cart-card-price">
              <p>&#8377; {discount}</p>
            </div>
            <div className="cart-card-quantity">
              <span>Quantity: </span>
              <div className="qunatity-fields">
                <button className="minus">-</button>
                <input
                  type="number"
                  value={qty}
                  readOnly
                  className="qty-input"
                />
                <button className="plus">+</button>
              </div>
            </div>
          </div>
          {isPresentInWishlist(cartProduct) === -1 ? (
            <button
              className="move-to-wishlist-btn"
              onClick={() => addToWishlist(cartProduct)}
            >
              Add to Wishlist
            </button>
          ) : (
            <button className="move-to-wishlist-btn">Added to Wishlist</button>
          )}
          <button
            className="remove-from-cart-btn"
            onClick={() => removeFromCart(cartProduct)}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
