import { Link } from "react-router-dom";
import "./CartPrice.css";
import { useCart } from "../../contexts/cart-context";

const CartPrice = () => {
  const {
    cartState: { cart },
    totalPriceWithoutDiscount,
    totalDiscount,
    totalCheckoutAmount,
    deliveryCharges,
  } = useCart();
  return (
    <div className="cart-pricing-card">
      <div className="pricing-card-title">
        <h2>Price Details</h2>
      </div>
      <hr />
      <div className="sub-price">
        <div className="price">
          <div className="text">
            Price (<span>{cart.length}</span> <span>items</span>)
          </div>
          <div className="value">&#8377; {totalPriceWithoutDiscount}</div>
        </div>
        <div className="price">
          <div className="text">Discount</div>
          <div className="value">- &#8377; {totalDiscount}</div>
        </div>
        <div className="price">
          <div className="text">Delivery Charges</div>
          <div className="value">&#8377; {deliveryCharges}</div>
        </div>
      </div>
      <hr />
      <div className="total-price">
        <div className="text">Total Amount</div>
        <div className="value">&#8377; {totalCheckoutAmount}</div>
      </div>
      <hr />
      <Link to="/checkout">
        <button className="cart-checkout-btn">checkout</button>
      </Link>
    </div>
  );
};

export default CartPrice;
