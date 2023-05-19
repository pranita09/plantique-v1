import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProducts } from '../../contexts/products-context';
import './Wishlist.css';

const Wishlist = () =>{

    const {products} = useProducts()

    const wishlistState = products;

    return(
        <div className='page-wrapper'>
            <section className='wishlist-container'>
                <div className='wishlist-container-heading'>
                    <h2>My Wishlist ({wishlistState.length})</h2>
                </div>

                {
                    wishlistState.length > 0 ? (
                        <div className='wishlist-main'>
                            {
                                wishlistState?.map((wishlistItem)=>(
                                    <ProductCard product={wishlistItem}/>
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

            </section>
        </div>
    )
}
export default Wishlist;