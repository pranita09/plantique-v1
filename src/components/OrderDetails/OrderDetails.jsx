import './OrderDetails.css';

const cartState = [
    {
        _id: 23,
        title: "Ixora (Rugmini) Plant - Yellow",
        imgSrc: "/images/products/ixora-rugmini-plant-yellow.jpg",
        price: 600,
        discount: 450,
        starRating: 3.1,
        size: "Small",
        inStock: true,
        fastDelivery: true,
        onSale: true,
        category: 'Flowers',
        qty: 1,
        wishlist: false
      },
      {
        _id: 12,
        title: "Ixora (Rugmini) Plant - Orange",
        imgSrc: "/images/products/ixora-rugmini-plant-dark-orange.jpg",
        price: 700,
        discount: 550,
        starRating: 4.7,
        size: "Medium",
        inStock: true,
        fastDelivery: true,
        onSale: false,
        category: 'Flowers',
        qty: 1,
        wishlist: false
      }
]

const currentAddress = {
    _id: 123,
    name: 'Nikita Shah',
    street: '5, IndiraNagar',
    city: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    zipcode: '876534',
    mobile: 567890873
};

const OrderDetails = () =>{
    return(
        <div className="order-details-container">
            <div className='title'>Order Summary</div>
            <div className='order-items-wrapper'>
                {
                    cartState?.map((cartItem)=>(
                        <div key={cartItem._id} className='item'>
                            <div>
                                {cartItem.title} (&#8377;{cartItem.discount} X {cartItem.qty})
                            </div>
                            <div>&#8377;{cartItem.discount * cartItem.qty}</div>
                        </div>
                    ))
                }
            </div>
            <div className='title'>Price-details</div>
            <div className='order-items-wrapper'>
                <div className='item'>
                    <div>Total Price</div>
                    <div>&#8377;456</div>
                </div>
                <div className='item'>
                    <div>Total Discount</div>
                    <div>&#8377;234</div>
                </div>
                <div className='item'>
                    <div>Delivery Charges</div>
                    <div>&#8377;49</div>
                </div>
                <div className='item'>
                    <div>Grand Total</div>
                    <div>&#8377; 76351</div>
                </div>
            </div>
            <div className='title'>Deliver To</div>
            <div className='order-items-wrapper address-wrap'>
                {
                    currentAddress ? (
                        <>
                            <div className='address-name'>{currentAddress.name}</div>
                            <div>
                                {currentAddress.street}, {currentAddress.city} - {currentAddress.zipcode}
                            </div>
                            <div>
                                {currentAddress.state}, {currentAddress.country}
                            </div>
                            <div>{currentAddress.mobile}</div>
                        </>
                    ) 
                        : (
                            <p>Add an Address to Proceed.</p>
                    )
                }
            </div>
            <button className='place-order-btn'>Place Order</button>
        </div>
    )
}

export default OrderDetails;