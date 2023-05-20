import { Link } from 'react-router-dom';
import './CartPrice.css';

const CartPrice = () =>{
    return(
        <div className='cart-pricing-card'>
            <div className='pricing-card-title'>
                <h2>Price Details</h2>
            </div>
            <hr />
            <div className='sub-price'>
                <div className='price'>
                    <div className='text'>
                        Price (<span>2</span>{" "}
                                <span>items</span>)
                    </div>
                    <div className='value'>
                        &#8377; 3456
                    </div>
                </div>
                <div className='price'>
                    <div className='text'>
                        Discount
                    </div>
                    <div className='value'>
                        - &#8377; 987
                    </div>
                </div>
                <div className='price'>
                    <div className='text'>
                        Delivery Charges
                    </div>
                    <div className='value'>
                        &#8377; 89
                    </div>
                </div>
            </div>
            <hr />
            <div className='total-price'>
                <div className='text'>
                    Total Amount
                </div>
                <div className='value'>
                    &#8377; 9876
                </div>
            </div>
            <hr />
            <Link to='/checkout'><button className='cart-checkout-btn'>checkout</button></Link>
        </div>
    )
}

export default CartPrice;