import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom';
import ProductListing from './pages/ProductListing/ProductListing';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import MockMan from 'mockman-js';
import Footer from './components/Footer/Footer';

const getProducts = async() =>{
  try {

      const creds = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika"
      }
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(creds),
      });

      const {encodedToken} = await res.json();

      localStorage.setItem("encodedToken", encodedToken);
      console.log(localStorage.getItem("encodedToken"));

  } catch (error) {
      console.error(error);
  }
}

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1 onClick={()=> getProducts()}>Hello People</h1> */}
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
      <Footer />
    </div>
  );
}

export default App;

