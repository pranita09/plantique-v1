import "./Wishlist.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";

const Wishlist = () => {
  const {
    wishlistState: { wishlist },
    isLoading,
  } = useWishlist();
  document.title = "Wishlist | Plantique";

  return (
    <div className="page-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <section className="wishlist-container">
          <div className="wishlist-container-heading">
            <h2>My Favorites ({wishlist?.length})</h2>
          </div>
          {wishlist.length > 0 ? (
            <div className="wishlist-main">
              {wishlist?.map((wishlistItem) => (
                <ProductCard
                  key={wishlistItem._id}
                  product={wishlistItem}
                  addedToWishlist
                />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p>Whoops! Your wishlist is empty.</p>
              <button>
                <Link to="/store" className="wishlist-to-store-link">
                  Explore to store.
                </Link>
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
export default Wishlist;
