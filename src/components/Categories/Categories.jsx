import "./Categories.css";
import { useProducts } from "../../contexts/products-context";
import filterTypes from "../../constants/filterTypes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CategoryCard = ({ catImg, category }) => {
  const navigate = useNavigate();
  const { productState, productDispatch } = useProducts();
  const { CATEGORY, CLEAR_FILTERS } = filterTypes;

  useEffect(() => {
    productDispatch({
      type: CLEAR_FILTERS,
      payload: {
        categories: productState.allCategories,
        products: productState.products,
      },
    });
  }, []);

  return (
    <div className="category-card-container">
      <div className="category-card">
        <img
          src={catImg}
          alt="category-img"
          onClick={() => {
            productDispatch({ type: CATEGORY, payload: category });
            window.scroll({ top: 0, behavior: "smooth"});
            navigate("/store");
          }}
        />
      </div>
      <p>{category}</p>
    </div>
  );
};

const Categories = () => {
  const { productState } = useProducts();

  return (
    <>
      <div className="category-outer-container">
        <h1>What are you looking for?</h1>
        <p>
          Gardening is not just a activity - for some, it is a stress release.
          For others, it is an escape into a world filled with hope and joy. So,
          choose your plants now!
        </p>
        <div className="category-cards">
          {productState?.allCategories?.map(({ _id, img, categoryName }) => (
            <CategoryCard key={_id} catImg={img} category={categoryName} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Categories;
