import { Link } from 'react-router-dom';
import CartCard from '../../components/CartCard/CartCard';
import CartPrice from '../../components/CartPrice/CartPrice';
import './Cart.css';

const Cart = () =>{

    const cartState = [12];

    return(
        <div className='page-wrapper'>
            <section className="cart-container">
                <div className='cart-container-heading'><h2>My Cart (<span>{cartState.length}</span>)</h2></div>

                {
                    cartState.length > 0 ? (
                        <div className='cart-main'>
                            <div className='cart-products'>
                                <CartCard />
                                {/* <CartCard /> */}
                                {/* <CartCard /> */}
                            </div>
                            <div className='cart-price'>
                                <CartPrice />
                            </div>
                        </div>
                    ) : 
                    (<div className='text-center'>
                        <p>Oops! Your cart is empty.</p>
                        <button><Link to="/store" className='cart-to-store-link'>
                            Explore the store.
                        </Link></button>
                    </div>)
                }

            </section>
        </div>
    )
}

export default Cart;