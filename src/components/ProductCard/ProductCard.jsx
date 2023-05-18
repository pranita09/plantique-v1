import './ProductCard.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) =>{
    const {_id, title, imgSrc, price, discount, starRating, inStock, fastDelivery, onSale } = product;
    return(
        <div className="product-card">
            <Link to={`/product/${_id}`}><div className='product-img'>
                <img src={imgSrc} alt={title} />
            </div></Link>
            { onSale && <div className='sale'>
                <p>Sale</p>
            </div>}
            <div className='wishlist-btn'>
                <FavoriteBorderRoundedIcon/>
            </div>
            <div className='card-details'>
                <h3>{title}</h3>
                <div className='star'>
                    <StarRoundedIcon />
                    <p className='star-value'> {starRating}</p>
                </div>
                <div className='price-delivery-tags'>
                    <div className='prices'>
                        <p className='old-price'>₹{price}</p>
                        <p className='new-price'>₹{discount}</p>
                    </div>
                    { fastDelivery && <div className='delivery'>
                        <p>Fast Delivery</p>
                    </div>}
                </div>
                { inStock ? <button className='add-to-cart-btn'>Add To Cart</button> : <button disabled className='out-of-stock-btn'>Out of Stock</button>}
            </div>
        </div>
    )
}
export default ProductCard;