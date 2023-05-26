import './Checkout.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import AddressModal from '../../components/AddressModal/AddressModal';
import { useAddress } from '../../contexts/address-context';
import addressActionTypes from '../../constants/addressActionTypes';

const Checkout = () =>{

    const {addressState: {addresses, showAddressModal, selectedAddressId}, addressDispatch} = useAddress();
    const {SHOW_ADDRESS_MODAL, SET_SELECTED_ADDRESS_ID} = addressActionTypes;

    return(
        <div className="page-wrapper">
            <section className='checkout-container'>
                <h2>Checkout</h2>
                <div className='checkout-wrapper'>
                    <div className='checkout-address'>
                        <div className='address-title'>
                            Select Address
                        </div>
                        <div className='address-list'>
                            {
                                addresses?.length ? (
                                    addresses?.map(address => (
                                        <label className='address' key={address._id}>
                                            <input 
                                                type='radio'
                                                name='address'
                                                checked={selectedAddressId === address._id}
                                                onChange={()=> addressDispatch({type: SET_SELECTED_ADDRESS_ID, payload: address._id})}
                                             />
                                             <div>
                                                <div className='address-name'>{address.name}</div>
                                                <div>{address.street}</div>
                                                <div>{address.city} - {address.zipcode}</div>
                                                <div>{address.state}, {address.country}</div>
                                                <div>{address.mobile}</div>
                                             </div>
                                        </label>
                                    ))
                                ) 
                                    : (<p>No address available.</p>)
                            }
                        </div>
                        <button className='add-address-btn' onClick={()=> addressDispatch({type: SHOW_ADDRESS_MODAL, payload: true})}>
                            <div className='add-address-icon'>
                                <AddOutlinedIcon />
                            </div>
                            Add address
                        </button>
                    </div>

                    <OrderDetails />
                </div>

                { showAddressModal ? (
                    <div className='address-modal'>
                        <AddressModal />
                    </div>
                ) : null }

            </section>
        </div>
    )
}

export default Checkout;