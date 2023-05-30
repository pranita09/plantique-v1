import "./ProductListing.css";
import { useProducts } from "../../contexts/products-context";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const ProductListing = () => {
  const {
    productState,
    toggleFilter,
    isLoading,
    filteredBySize: filteredProducts,
  } = useProducts();
  document.title = "Plantique Store";

  const { products } = productState;

  return (
    <div className="products-listing-outer-container page-wrapper">
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="products-filters-container">
            <ProductFilters />
          </div>
          <div className="products-outer-container">
            <div className="products-title-bar">
              <div>
                <h2>Plants</h2>
                <h4>
                  Showing {filteredProducts.length} Plants of {products.length}{" "}
                  Plants
                </h4>
              </div>
              <div className="filter-icon">
                <TuneOutlinedIcon onClick={toggleFilter} />
              </div>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="products-container">
                {filteredProducts?.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center no-products-msg">
                Whoops! We don't have any plant that match your preference.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListing;
