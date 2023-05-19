import "./AddressModal.css";

const AddressModal = ({setShowAddressModal}) => {
  return (
    <div className="address-form-wrapper">
      <h3>Add New Address</h3>
      <form className="address-form-fields-group">
        <div className="field input-field">
          <input type="text" placeholder="Name" className="input" />
        </div>
        <div className="field input-field">
          <input type="text" placeholder="Street" className="input" />
        </div>
        <div className="field input-field">
          <input type="text" placeholder="City" className="input" />
        </div>
        <div className="field input-field">
          <input type="text" placeholder="Zipcode" className="input" />
        </div>
        <div className="field input-field">
          <input type="text" placeholder="State" className="input" />
        </div>
        <div className="field input-field">
          <input type="input" placeholder="Country" className="input" />
        </div>
        <div className="field input-field">
          <input type="text" placeholder="Mobile No." className="input" />
        </div>
        <div className="address-form-action-btns">
          <div className="field input-field">
            <button className="add-btn">Add</button>
          </div>
          <div className="field input-field">
            <button className="cancel-btn" onClick={()=> setShowAddressModal(false)}>Cancel</button>
          </div>
        </div>
        <div className="field input-field">
          <button className="fill-dummy-values-btn">Fill with Dummy Values</button>
        </div>
      </form>
    </div>
  );
};

export default AddressModal;
