import { useState } from 'react';
import './AddressList.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const addresses = [
    {
        _id: 123,
        name: 'Nikita Shah',
        street: '5, IndiraNagar',
        city: 'Kolkata',
        state: 'West Bengal',
        country: 'India',
        zipcode: '876534',
        mobile: 567890873
    },
    {
        _id: 123,
        name: 'Ashish Sharma',
        street: 'M. G. Road',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '410504',
        mobile: 967890873
    }
]

// const addresses = [];

const AddressList = () =>{

    const [showAddressModal, setShowAddressModal] = useState(false);

    return(
        <div className='addresses-container'>
            <button className='add-address-btn' onClick={()=> setShowAddressModal(false)}>
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
                    <div className='address-model'>
                        {/* AddressModel component */}
                    </div>
                ) : null
            }
        </div>
    )
}

export default AddressList;