import "./Checkout.css";
import { useAddress } from "../../contexts/address-context";
import { addressActionTypes } from "../../utils/constants";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import AddressModal from "../../components/AddressModal/AddressModal";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Checkout = () => {
  const {
    addressState: { addresses, showAddressModal, selectedAddressId },
    addressDispatch,
  } = useAddress();

  document.title = "Checkout | Plantique";

  const { SHOW_ADDRESS_MODAL, SET_SELECTED_ADDRESS_ID } = addressActionTypes;

  return (
    <div className="page-wrapper">
      <section className="checkout-container">
        <h2>Checkout</h2>
        <div className="checkout-wrapper">
          <div className="checkout-address">
            <div className="address-title">Select Address</div>
            <div className="address-list">
              {addresses.length ? (
                addresses?.map(
                  ({
                    _id,
                    name,
                    street,
                    city,
                    zipcode,
                    state,
                    country,
                    mobile,
                  }) => (
                    <label className="address" key={_id}>
                      <input
                        type="radio"
                        name="address"
                        checked={selectedAddressId === _id}
                        onChange={() =>
                          addressDispatch({
                            type: SET_SELECTED_ADDRESS_ID,
                            payload: _id,
                          })
                        }
                      />
                      <div>
                        <div className="address-name">{name}</div>
                        <div>{street}</div>
                        <div>
                          {city} - {zipcode}
                        </div>
                        <div>
                          {state}, {country}
                        </div>
                        <div>{mobile}</div>
                      </div>
                    </label>
                  )
                )
              ) : (
                <p>No address available.</p>
              )}
            </div>
            <button
              className="add-address-btn"
              onClick={() =>
                addressDispatch({ type: SHOW_ADDRESS_MODAL, payload: true })
              }
            >
              <div className="add-address-icon">
                <AddOutlinedIcon />
              </div>
              Add address
            </button>
          </div>

          <OrderDetails />
        </div>

        {showAddressModal ? (
          <div className="address-modal">
            <AddressModal />
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Checkout;
