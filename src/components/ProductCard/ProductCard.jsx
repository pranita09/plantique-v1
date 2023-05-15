import './ProductCard.css';
import { products } from "../../backend/db/products";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const ProductCard = () =>{
    const prod = products[0];
    const {_id, title, imgSrc, price, discount, startRating, inStock, fastDelivery, onSale } = prod;
    return(
        <div className="product-card">
            <div className='product-img'>
                <img src={imgSrc} alt={title} />
            </div>
            <div className='sale'>
                <p>Sale</p>
            </div>
            <div className='wishlist-btn'>
                <FavoriteBorderRoundedIcon/>
            </div>
            <div className='card-details'>
                <h3>{title}</h3>
                <div className='star'>
                    <StarRoundedIcon />
                    <p className='star-value'> {startRating}.0</p>
                </div>
                <div className='price-delivery-tags'>
                    <div className='prices'>
                        <p className='old-price'>{price}</p>
                        <p className='new-price'>{discount}</p>
                    </div>
                    <div className='delivery'>
                        <p>Fast Delivery</p>
                    </div>
                </div>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}
export default ProductCard;