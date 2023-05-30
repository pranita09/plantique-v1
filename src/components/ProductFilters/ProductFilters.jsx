import "./ProductFilters.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useProducts } from "../../contexts/products-context";
import { filterActionTypes } from "../../utils/constants";

const ProductFilters = () => {
  const { productState, productDispatch, showFilter, toggleFilter } =
    useProducts();

  const {
    CLEAR_FILTERS,
    CATEGORY,
    SIZE,
    AVAILABILITY,
    SORT_BY_PRICE,
    SORT_BY_RATING_RANGE,
  } = filterActionTypes;

  const productCategories = productState.products.reduce(
    (acc, { category }) =>
      acc.includes(category) ? [...acc] : [...acc, category],
    []
  );

  const productSizes = productState.products.reduce(
    (acc, { size }) => (acc.includes(size) ? [...acc] : [...acc, size]),
    []
  );

  return (
    <div
      className={showFilter ? "product-sidebar show-filter" : "product-sidebar"}
    >
      <div className="filter-title-bar">
        <div>
          <p className="filter-heading">Filters</p>
        </div>
        <div className="clear-wrapper-container">
          <p
            className="clear-filter"
            onClick={() =>
              productDispatch({
                type: CLEAR_FILTERS,
                payload: {
                  products: productState.products,
                  categories: productState.allCategories,
                },
              })
            }
          >
            Clear
          </p>
          <div className="close-btn">
            <CloseRoundedIcon onClick={() => toggleFilter()} />
          </div>
        </div>
      </div>

      <div className="filters">
        <div className="filter-wrapper">
          <p className="filter-title">Rating</p>
          <div className="filter-value">
            <div className="filter-rating">
              <span>
                1 <StarRoundedIcon />
              </span>
              <span>
                5 <StarRoundedIcon />
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              list="steplist"
              value={productState.ratingRange}
              onChange={(event) =>
                productDispatch({
                  type: SORT_BY_RATING_RANGE,
                  payload: event.target.value,
                })
              }
            />
            <datalist id="steplist">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </datalist>
          </div>
        </div>

        <div className="filter-wrapper">
          <p className="filter-title">Categories</p>
          <div className="filter-value filter-category">
            {productCategories?.map((category, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={productState.categoryInput.includes(category)}
                  value={category}
                  onChange={(event) =>
                    productDispatch({
                      type: CATEGORY,
                      payload: event.target.value,
                    })
                  }
                />
                <p>{category}</p>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-wrapper">
          <p className="filter-title">Size</p>
          <div className="filter-value filter-category">
            {productSizes?.map((size, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={productState.sizeInput.includes(size)}
                  value={size}
                  onChange={(event) =>
                    productDispatch({ type: SIZE, payload: event.target.value })
                  }
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        <div className="filter-wrapper">
          <p className="filter-title">Availability</p>
          <div className="filter-value filter-category">
            <label>
              <input
                type="checkbox"
                checked={!productState.availabilityInput.includes("inStock")}
                value="inStock"
                onChange={(event) =>
                  productDispatch({
                    type: AVAILABILITY,
                    payload: event.target.value,
                  })
                }
              />
              Include out of Stock
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.availabilityInput.includes(
                  "fastDelivery"
                )}
                value="fastDelivery"
                onChange={(event) =>
                  productDispatch({
                    type: AVAILABILITY,
                    payload: event.target.value,
                  })
                }
              />
              Fast Delivery Only
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.availabilityInput.includes("onSale")}
                value="onSale"
                onChange={(event) =>
                  productDispatch({
                    type: AVAILABILITY,
                    payload: event.target.value,
                  })
                }
              />
              On Sale
            </label>
          </div>
        </div>

        <div className="filter-wrapper">
          <p className="filter-title">Sort By</p>
          <div className="filter-value filter-sort">
            <label>
              <input
                type="radio"
                checked={productState.sortPriceRadioInput === "hightolow"}
                name="sort"
                value="hightolow"
                onChange={(event) =>
                  productDispatch({
                    type: SORT_BY_PRICE,
                    payload: event.target.value,
                  })
                }
              />
              Price = High to Low
            </label>
            <label>
              <input
                type="radio"
                checked={productState.sortPriceRadioInput === "lowtohigh"}
                name="sort"
                value="lowtohigh"
                onChange={(event) =>
                  productDispatch({
                    type: SORT_BY_PRICE,
                    payload: event.target.value,
                  })
                }
              />
              Price = Low to High
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
