import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import ProductListing from '../pages/ProductListing/ProductListing';
import Cart from '../pages/Cart/Cart';
import Wishlist from '../pages/Wishlist/Wishlist';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import SingleProduct from '../pages/SingleProduct/SingleProduct';
import MockMan from 'mockman-js';

const NavRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<ProductListing />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/pagenotfound' element={<PageNotFound />} />
            <Route path='/product/:productID' element={<SingleProduct />}/>
            <Route path='/mockman' element={<MockMan />} />
            <Route path='/*' element={<PageNotFound/>} />
        </Routes>
    )
}

export default NavRoutes;