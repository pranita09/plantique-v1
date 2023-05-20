import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import ProductListing from '../pages/ProductListing/ProductListing';
import Cart from '../pages/Cart/Cart';
import Wishlist from '../pages/Wishlist/Wishlist';
import LogIn from '../pages/Authentication/LogIn/LogIn';
import SignUp from '../pages/Authentication/SignUp/SignUp';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import SingleProduct from '../pages/SingleProduct/SingleProduct';
import MockMan from 'mockman-js';
import Logout from "../pages/Authentication/Logout/Logout";
import UserAccount from "../pages/UserAccount/UserAccount";
import UserProfile from "../components/UserProfile/UserProfile";
import AddressList from "../components/AddressList/AddressList";
import OrderList from "../components/OrderList/OrderList";
import Checkout from "../pages/Checkout/Checkout";

const NavRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<ProductListing />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/pagenotfound' element={<PageNotFound />} />
            <Route path='/product/:productID' element={<SingleProduct />}/>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/mockman' element={<MockMan />} />
            <Route path='/*' element={<PageNotFound/>} />

            <Route path='/profile' element={<UserAccount />}>
                <Route path='' element={<UserProfile />} />
                <Route path='addresses' element={<AddressList />} />
                <Route path='orders' element={<OrderList />} />
            </Route>

        </Routes>
    )
}

export default NavRoutes;