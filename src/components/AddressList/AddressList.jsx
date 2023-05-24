import './AddressList.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddressModal from '../AddressModal/AddressModal';
import { useAddress } from '../../contexts/address-context';
import addressTypes from '../../constants/addressTypes';

const AddressList = () =>{

    const {addressState: {addresses, showAddressModal}, addressDispatch} = useAddress();
    const {SHOW_ADDRESS_MODAL, DELETE_ADDRESS, IS_ABLE_TO_EDIT} = addressTypes;

    const editAddressHandler = () =>{
        addressDispatch({ type: SHOW_ADDRESS_MODAL, payload: true});
        addressDispatch({type: IS_ABLE_TO_EDIT, payload: true});
    }

    return(
        <div className='addresses-container'>
            <button className='add-address-btn' onClick={()=> addressDispatch({type: SHOW_ADDRESS_MODAL, payload: true})}>
                <div className='add-address-icon'><AddOutlinedIcon /></div>
                Add address
            </button>
            <div className='addresses-list'>
                {
                    addresses.length ? (
                        addresses?.map(({_id, name, street, city, zipcode, state, country, mobile}) => (
                            <div key={_id} className='address'>
                                <p>{name}</p>
                                <p>{street},</p>
                                <p>{city} - {zipcode}</p>
                                <p>{state}, {country}</p>
                                <p>{mobile}</p>
                                <div className='address-action'>
                                    <button className='address-edit-btn' onClick={editAddressHandler}>Edit</button>
                                    <button className='address-delete-btn' onClick={()=> addressDispatch({type: DELETE_ADDRESS, payload: _id})}>Delete</button>
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