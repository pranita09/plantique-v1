import "./Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import CartCard from "../../components/CartCard/CartCard";
import CartPrice from "../../components/CartPrice/CartPrice";
import Loader from "../../components/Loader/Loader";

const Cart = () => {
  const {
    cartState: { cart },
    isLoading,
  } = useCart();

  document.title = "Cart | Plantique";

  return (
    <div className="page-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <section className="cart-container">
          <div className="cart-container-heading">
            <h2>
              My Cart (<span>{cart.length}</span>)
            </h2>
          </div>
          {cart.length > 0 ? (
            <div className="cart-main">
              <div className="cart-products">
                {cart?.map((product) => (
                  <CartCard key={product._id} cartProduct={product} />
                ))}
              </div>
              <div className="cart-price">
                <CartPrice />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p>Whoops! Your cart is empty.</p>
              <button>
                <Link to="/store" className="cart-to-store-link">
                  Explore the store.
                </Link>
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Cart;
