import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader';
import './Wishlist.css';
import { useWishlist } from '../../contexts/wishlist-context';

const Wishlist = () =>{

    const {wishlistState: {wishlist}, isLoading} = useWishlist();

    return(
        <div className='page-wrapper'>
            { isLoading ? <Loader /> :<section className='wishlist-container'>
                <div className='wishlist-container-heading'>
                    <h2>My Wishlist ({wishlist?.length})</h2>
                </div>
                {
                    wishlist?.length > 0 ? (
                        <div className='wishlist-main'>
                            {
                                wishlist?.map((wishlistItem)=>(
                                    <ProductCard key={wishlistItem._id} product={wishlistItem}/>
                                ))
                            }
                        </div>
                    ) : (<div className='text-center'>
                        <p>Oops! Your wishlist is empty.</p>
                        <button>
                        <Link to='/store' className='wishlist-to-store-link'>Explore to store.</Link>
                        </button>
                    </div>)
                }

            </section>}
        </div>
    )
}
export default Wishlist;