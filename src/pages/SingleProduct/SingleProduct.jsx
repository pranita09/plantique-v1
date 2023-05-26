import { useProducts } from "../../contexts/products-context";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleProduct.css";
import Loader from "../../components/Loader/Loader";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/auth-context";

const SingleProduct = () => {
  const navigate = useNavigate();
  const {
    productState: { products },
  } = useProducts();
  const { addToWishlist, removeFromWishlist, isPresentInWishlist } =
    useWishlist();
  const { addToCart, isPresentInCart } = useCart();
  const {token} = useAuth();

  const { productID } = useParams();

  const currentProduct = products.find((item) => item._id === productID);

  const {
    _id,
    title,
    imgSrc,
    price,
    discount,
    starRating,
    size,
    inStock,
    fastDelivery,
    onSale,
    category,
  } = currentProduct;

  return (
    <div className="single-product-outer-container">
      <div className="single-product-inner-container">
        {currentProduct ? (
          <div className="single-product">
            <div className="img-div">
              <img src={imgSrc} alt={title} className="single-product-img" />
            </div>

            {onSale && <div className="single-product-sale">On Sale</div>}

            <div className="card-body">
              <div>
                <div className="card-heading">
                  <h2>{title}</h2>
                </div>

                <div className="rating">
                  <div className="rating-block">
                    <span>{starRating}</span>
                    <span className="star-icon">
                      <StarRoundedIcon />
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="single-product-price">
                    <div className="price">&#8377; {discount}</div>
                    <div className="previous-price">&#8377; {price}</div>
                  </div>
                </div>

                <div className="card-tags">
                  <div className="tag">
                    <div className="tag-icon">
                      <CardGiftcardOutlinedIcon />
                    </div>
                    <div className="tag-text">
                      <p>Send it as a gift</p>
                    </div>
                  </div>
                  <div className="tag">
                    <div className="tag-icon">
                      <LocalShippingOutlinedIcon />
                    </div>
                    <div className="tag-text">
                      <p>All India delivery</p>
                    </div>
                  </div>
                  <div className="tag">
                    <div className="tag-icon">
                      <PaymentOutlinedIcon />
                    </div>
                    <div className="tag-text">
                      <p>All cards accepted</p>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="card-description-container">
                <div className="card-description">
                  <ul className="spaced-list">
                    <p className="list-head">Plant Details</p>
                    <li>
                      <p>Comes In:</p>
                      <span className="list-value">
                        {size === "Small" ? "Small Size" : "Medium Size"}
                      </span>
                    </li>
                    <li>
                      <p>Category:</p>
                      <span className="list-value">{category}</span>
                    </li>
                    <li>
                      <p>Availability:</p>
                      <span className="list-value">
                        {inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </li>
                    <li>
                      <p>Delivery:</p>
                      <span className="list-value">
                        {fastDelivery ? "Fast" : "5-7 Business days"}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="card-action">
                  {isPresentInCart(currentProduct) === -1 ? (
                    <button
                      className="single-product-cart-btn"
                      onClick={ token ? () => addToCart(currentProduct) : ()=> navigate('/login')}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      className="single-product-cart-btn"
                      onClick={() => navigate("/cart")}
                    >
                      Go to Cart
                    </button>
                  )}
                  <button
                    className="single-product-wishlist-btn"
                    onClick={() =>
                      isPresentInWishlist(currentProduct) === -1
                        ? token ? addToWishlist(currentProduct) : navigate('/login')
                        : removeFromWishlist(currentProduct)
                    }
                  >
                    {isPresentInWishlist(currentProduct) === -1
                      ? "Add to Wishlist"
                      : "Remove from Wishlist "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
