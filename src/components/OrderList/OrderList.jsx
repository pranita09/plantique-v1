import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/products-context";
import "./OrderList.css";

const OrderList = () => {
  const {
    productState: { orderList },
    getProductById,
  } = useProducts();

  return (
    <div className="order-list-container">
      {orderList.length > 0 ? (
        [...orderList]
          ?.reverse()
          ?.map(
            ({
              id,
              productsList,
              address: { name, street, city, zipcode, state, country, mobile },
              amount,
              date,
              deliveryDate,
            }) => (
              <div key={id} className="order-container">
                <p>
                  <span>Payment ID : </span>
                  {id}
                </p>
                <p>
                  <span>Amount Paid : </span>&#8377;{amount}
                </p>
                <p>
                  <span>Address : </span>
                  {name}, {street}, {city} - {zipcode}, {state}, {country}
                </p>
                <p>
                  <span>Mobile No. : </span>
                  {mobile}
                </p>
                <p>
                  <span>Expected Delivery On : </span>
                  {deliveryDate}
                </p>
                <p>
                  <span>Plants Ordered :</span>
                </p>
                <div className="order-products-container">
                  {productsList?.map(
                    ({ _id, title, imgSrc, updatedPrice, qty }) => (
                      <Link key={_id} to={`/product/${_id}`}>
                        <div
                          className="order-product-box"
                          onClick={() => getProductById(_id)}
                        >
                          <div className="order-product-img-div">
                            <img src={imgSrc} alt={title} />
                          </div>
                          <div className="order-product-content">
                            <p>
                              <span>{title}</span>
                            </p>
                            <p>
                              <span>Price: </span>&#8377;{updatedPrice}
                            </p>
                            <p>
                              <span>Qty: </span>
                              {qty}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            )
          )
      ) : (
        <p className="text-center">No orders placed yet.</p>
      )}
    </div>
  );
};

export default OrderList;
