import { products } from "../../backend/db/products";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const ProductCard = () =>{
    const prod = products[0];
    const {_id, title, imgSrc, price, discount, startRating, inStock, fastDelivery, onSale } = prod;
    return(
        <div className="product-card">
            <img src={imgSrc} alt={title} />
            <div>
                <p>Sale</p>
            </div>
            <div>
                <FavoriteBorderRoundedIcon/>
            </div>
            <div>

            </div>
            <h3>{title}</h3>
            <div>
                <StarRoundedIcon />
                <p> {startRating}</p>
            </div>
            <div>
                <div>
                    <p>{price}</p>
                    <p>{discount}</p>
                </div>
                <div>
                    <p>Fast Delivery</p>
                </div>
            </div>
            <div>
                <button>Add To Cart</button>
                <button>Out of Stock</button>
            </div>

        </div>
    )
}
export default ProductCard;