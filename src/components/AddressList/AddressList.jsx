import './AddressList.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddressModal from '../AddressModal/AddressModal';
import { useAddress } from '../../contexts/address-context';
import addressTypes from '../../constants/addressTypes';

const AddressList = () =>{

    const {addressState: {addresses, showAddressModal}, addressDispatch} = useAddress();
    const {SHOW_ADDRESS_MODAL} = addressTypes;

    return(
        <div className='addresses-container'>
            <button className='add-address-btn' onClick={()=> addressDispatch({type: SHOW_ADDRESS_MODAL, payload: true})}>
                <div className='add-address-icon'><AddOutlinedIcon /></div>
                Add address
            </button>
            <div className='addresses-list'>
                {
                    addresses.length ? (
                        addresses?.map(address => (
                            <div key={address._id} className='address'>
                                <p>{address.name}</p>
                                <p>{address.street},</p>
                                <p>{address.city} - {address.zipcode}</p>
                                <p>{address.state}, {address.country}</p>
                                <p>{address.mobile}</p>
                                <div className='address-action'>
                                    <button className='address-edit-btn'>Edit</button>
                                    <button className='address-delete-btn'>Delete</button>
                                </div>
                            </div>
                        ))
                    ) 
                        : (<p>No address found.</p>)
                }
            </div>
            {
                showAddressModal ? (
                    <div className='address-modal'>
                        <AddressModal />
                    </div>
                ) : null
            }
        </div>
    )
}

export default AddressList;