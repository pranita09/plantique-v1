import "./OrderDetails.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAddress } from "../../contexts/address-context";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/auth-context";
import { useProducts } from "../../contexts/products-context";
import { filterActionTypes } from "../../utils/constants";
import popper from "../../utils/popper";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { productDispatch } = useProducts();
  const {
    cartState: { cart },
    deliveryCharges,
    totalPriceWithoutDiscount,
    totalDiscount,
    totalCheckoutAmount,
    clearCart,
  } = useCart();
  const {
    addressState: { addresses, selectedAddressId },
  } = useAddress();

  const { SET_ORDER_LIST } = filterActionTypes;

  const currentAddress = addresses.find(({ _id }) => _id === selectedAddressId);

  const getDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const handlePaymentSuccess = (response) => {
    const orderDetail = {
      id: response.razorpay_payment_id,
      productsList: [...cart],
      address: currentAddress,
      amount: totalCheckoutAmount,
      date: new Date(),
      deliveryDate: getDeliveryDate(),
    };
    productDispatch({ type: SET_ORDER_LIST, payload: orderDetail });
    navigate("/order-successful");
    popper();
    clearCart();
    setTimeout(() => {
      navigate("/profile/orders");
    }, 5000);
  };

  const razorpayOptions = {
    key: "rzp_test_00dP2uDP2yHZOB",
    amount: totalCheckoutAmount * 100,
    name: "Plantique",
    description: "Thank You For Ordering",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Bestseller-1_2x_9a883cf1-58ba-4c74-badf-f02924575b68_small.png?v=1656416175",
    handler: (response) => handlePaymentSuccess(response),
    prefill: {
      name: currentUser?.firstName,
      email: currentUser?.email,
      contact: currentAddress?.mobile,
    },
    notes: {
      address: currentAddress,
    },
    theme: {
      color: "#1b4b33",
    },
  };

  const placeOrderBtnHandler = () => {
    if (currentAddress) {
      const razorpayInstance = new window.Razorpay(razorpayOptions);
      razorpayInstance.open();
    } else {
      toast.error("Please select an address to proceed further.");
    }
  };

  return (
    <div className="order-details-container">
      <div className="title">Order Summary</div>
      <div className="order-items-wrapper">
        {cart?.map((cartItem) => (
          <div key={cartItem._id} className="item">
            <div>
              {cartItem.title} (&#8377;{cartItem.updatedPrice} X {cartItem.qty})
            </div>
            <div>&#8377;{cartItem.updatedPrice * cartItem.qty}</div>
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
      <button
        className="place-order-btn"
        onClick={() => placeOrderBtnHandler()}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderDetails;
