import { useCart } from "../../contexts/cart-context";
import "./OrderDetails.css";

const currentAddress = {
  _id: 123,
  name: "Nikita Shah",
  street: "5, IndiraNagar",
  city: "Kolkata",
  state: "West Bengal",
  country: "India",
  zipcode: "876534",
  mobile: 567890873,
};

const OrderDetails = () => {
  const {
    cartState: { cart },
    deliveryCharges,
    totalPriceWithoutDiscount,
    totalDiscount,
    totalCheckoutAmount,
  } = useCart();

  return (
    <div className="order-details-container">
      <div className="title">Order Summary</div>
      <div className="order-items-wrapper">
        {cart?.map((cartItem) => (
          <div key={cartItem._id} className="item">
            <div>
              {cartItem.title} (&#8377;{cartItem.discount} X {cartItem.qty})
            </div>
            <div>&#8377;{cartItem.discount * cartItem.qty}</div>
          </div>
        ))}
      </div>
      <div className="title">Price-details</div>
      <div className="order-items-wrapper">
        <div className="item">
          <div>Total Price</div>
          <div>&#8377;{totalPriceWithoutDiscount}</div>
        </div>
        <div className="item">
          <div>Total Discount</div>
          <div>&#8377;{totalDiscount}</div>
        </div>
        <div className="item">
          <div>Delivery Charges</div>
          <div>&#8377;{deliveryCharges}</div>
        </div>
        <div className="item grand-total">
          <div>Grand Total</div>
          <div>&#8377;{totalCheckoutAmount}</div>
        </div>
      </div>
      <div className="title">Deliver To</div>
      <div className="order-items-wrapper address-wrap">
        {currentAddress ? (
          <>
            <div className="address-name">{currentAddress.name}</div>
            <div>
              {currentAddress.street}, {currentAddress.city} -{" "}
              {currentAddress.zipcode}
            </div>
            <div>
              {currentAddress.state}, {currentAddress.country}
            </div>
            <div>{currentAddress.mobile}</div>
          </>
        ) : (
          <p>Add an Address to Proceed.</p>
        )}
      </div>
      <button className="place-order-btn">Place Order</button>
    </div>
  );
};

export default OrderDetails;
