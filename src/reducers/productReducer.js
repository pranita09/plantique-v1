import filterTypes from "../constants/filterTypes";

const {
  DISPLAY_PRODUCTS,
  CATEGORY,
  SIZE,
  AVAILABILITY,
  SORT_BY_PRICE,
  SORT_BY_RATING_RANGE,
  CLEAR_FILTERS,
} = filterTypes;

export const initialProductState = {
  products: [],
  categoryInput: [],
  sizeInput: [],
  availabilityInput: ["inStock"],
  sortPriceRadioInput: "",
  ratingRange: 5,
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: payload };
    case CATEGORY:
      return {
        ...state,
        categoryInput: state.categoryInput.includes(payload)
          ? state.categoryInput.filter(
              (categoryType) => categoryType !== payload
            )
          : [...state.categoryInput, payload],
      };
    case SIZE:
      return {
        ...state,
        sizeInput: state.sizeInput.includes(payload)
          ? state.sizeInput.filter((sizeType) => sizeType !== payload)
          : [...state.sizeInput, payload],
      };
    case AVAILABILITY:
      return {
        ...state,
        availabilityInput: state.availabilityInput.includes(payload)
          ? state.availabilityInput.filter((type) => type !== payload)
          : [...state.availabilityInput, payload],
      };
    case SORT_BY_PRICE:
      return { ...state, sortPriceRadioInput: payload };
    case SORT_BY_RATING_RANGE:
      return { ...state, ratingRange: payload };
    case CLEAR_FILTERS:
      return { ...initialProductState, products: payload };
    default:
      return state;
  }
};
