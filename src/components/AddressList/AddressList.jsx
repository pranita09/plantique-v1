import "./AddressList.css";
import { useAddress } from "../../contexts/address-context";
import { addressActionTypes } from "../../utils/constants";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddressModal from "../AddressModal/AddressModal";
import Loader from "../../components/Loader/Loader";

const AddressList = () => {
  const {
    addressState: { addresses, showAddressModal },
    addressDispatch,
    removeAddress,
    isLoading,
    setIsEditBtn,
  } = useAddress();

  const { SHOW_ADDRESS_MODAL, EDIT_ADDRESS_DETAILS } = addressActionTypes;

  const editAddressHandler = (addressToEdit) => {
    setIsEditBtn(true);
    addressDispatch({ type: SHOW_ADDRESS_MODAL, payload: true });
    addressDispatch({ type: EDIT_ADDRESS_DETAILS, payload: addressToEdit });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="addresses-container">
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
          <div className="addresses-list">
            {addresses.length ? (
              addresses?.map((address) => {
                const {
                  _id,
                  name,
                  street,
                  city,
                  zipcode,
                  state,
                  country,
                  mobile,
                } = address;
                return (
                  <div key={_id} className="address">
                    <p>{name}</p>
                    <p>{street},</p>
                    <p>
                      {city} - {zipcode}
                    </p>
                    <p>
                      {state}, {country}
                    </p>
                    <p>{mobile}</p>
                    <div className="address-action">
                      <button
                        className="address-edit-btn"
                        onClick={() => editAddressHandler(address)}
                      >
                        Edit
                      </button>
                      <button
                        className="address-delete-btn"
                        onClick={() => removeAddress(_id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No address found.</p>
            )}
          </div>
          {showAddressModal ? (
            <div className="address-modal">
              <AddressModal />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default AddressList;
