import './Checkout.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import { useState } from 'react';
import AddressModal from '../../components/AddressModal/AddressModal';

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

// const addresses = []

const Checkout = () =>{

    const [showAddressModal, setShowAddressModal] = useState(false);

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
                        <button className='add-address-btn' onClick={()=> setShowAddressModal(true)}>
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
                        <AddressModal setShowAddressModal={setShowAddressModal}/>
                    </div>
                ) : null }

            </section>
        </div>
    )
}

export default Checkout;