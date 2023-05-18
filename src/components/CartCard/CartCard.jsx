import './CartCard.css';
import { Link } from 'react-router-dom';

const cartProduct = {
    _id: 1234,
    title: "Peace Lily Plant",
    imgSrc: "/images/products/peace-lily-plant.jpg",
    price: 500,
    discount: 350,
    starRating: 4.7,
    size: "Small",
    inStock: true,
    fastDelivery: true,
    onSale: true,
    category: 'Flowers',
    qty: 1,
    wishlist: false
  }

const CartCard = () =>{

    const {_id, title, imgSrc, discount, qty} = cartProduct;

    return(
        <div className='cart-card-wrapper card-horizontal'>
            <div className='card-row'>
                <img src={imgSrc} alt={title} className='cart-card-img'/>
                <div className='cart-card-body'>
                    <Link to={`/product/${_id}`}>
                        <p className='cart-card-title'>{title}</p>
                    </Link>
                    <div className='cart-card-content'>
                        <div className='cart-card-price'>
                            <p>&#8377; {discount}</p>
                        </div>
                        <div className='cart-card-quantity'>
                            <span>Quantity: </span>
                            <div className='qunatity-fields'>
                                <button class='minus'>-</button>
                                <input type='number' value={qty} readOnly className='qty-input'/>
                                <button className='plus'>+</button>
                            </div>
                        </div>    
                    </div>
                    <button className='move-to-wishlist-btn'>Move to Wishlist</button>
                    <button className='remove-from-cart-btn'>Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard;