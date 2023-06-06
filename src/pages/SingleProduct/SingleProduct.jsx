import { useProducts } from "../../contexts/products-context";
import { useNavigate } from "react-router-dom";
import "./SingleProduct.css";
import Loader from "../../components/Loader/Loader";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-hot-toast";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productState, isLoading, handleCardBtnsClick } = useProducts();
  const { addToWishlist, removeFromWishlist, itemInWishlist } = useWishlist();
  const { addToCart, itemInCart } = useCart();
  const { token } = useAuth();

  const currentProduct = productState.productDetail;

  const {
    _id,
    title,
    imgSrc,
    description,
    price,
    updatedPrice,
    starRating,
    size,
    inStock,
    fastDelivery,
    onSale,
    category,
  } = currentProduct;

  document.title = title + " | Plantique";

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="single-product-outer-container page-wrapper">
          <div className="single-product-inner-container">
            <div className="single-product">
              <div className="img-div">
                <img src={imgSrc} alt={title} className="single-product-img" />
              </div>

              {!inStock ? (
                <div className="single-product-sale">Out of Stock</div>
              ) : onSale ? (
                <div className="single-product-sale">On Sale</div>
              ) : (
                <></>
              )}

              <div className="card-body">
                <div>
                  <div className="card-heading">
                    <h2>{title}</h2>
                  </div>

                  <div className="card-content">
                    <div className="single-product-price">
                      <div className="price">&#8377; {updatedPrice}</div>
                      <div className="previous-price">&#8377; {price}</div>
                      <div className="rating">
                        <div className="rating-block">
                          <span>{starRating}</span>
                          <span className="star-icon">
                            <StarRoundedIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="card-description">
                    <div>{description}</div>
                  </div>

                  <hr />

                  <div className="card-description-container">
                    <div className="card-description">
                      <ul className="spaced-list">
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
                            {fastDelivery
                              ? "2-3 Business Days"
                              : "5-7 Business Days"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr />

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

                <div className="card-action">
                  <div>
                    {inStock ? (
                      <button
                        className="single-product-cart-btn"
                        onClick={() =>
                          token
                            ? itemInCart(_id)
                              ? navigate("/cart")
                              : handleCardBtnsClick(
                                  600,
                                  addToCart,
                                  currentProduct
                                )
                            : navigate("/login")
                        }
                      >
                        {token && itemInCart(_id)
                          ? "Go to Cart"
                          : "Add to Cart"}
                      </button>
                    ) : (
                      <button
                        className="single-product-cart-btn out-of-stock-cart-btn"
                        onClick={() =>
                          toast.error(`Oops, ${title} is out of stock!`)
                        }
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                  <div>
                    <button
                      className="single-product-wishlist-btn"
                      onClick={() =>
                        token
                          ? itemInWishlist(_id)
                            ? handleCardBtnsClick(
                                600,
                                removeFromWishlist,
                                currentProduct
                              )
                            : handleCardBtnsClick(
                                600,
                                addToWishlist,
                                currentProduct
                              )
                          : navigate("/login")
                      }
                    >
                      {token && itemInWishlist(_id)
                        ? "Remove from Wishlist"
                        : "Add to Wishlist "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
