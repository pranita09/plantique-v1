import PageNotFound from '../PageNotFound/PageNotFound';
import Loader from '../../components/Loader/Loader'
import './Wishlist.css';

const Wishlist = () =>{
    return(
        <>
            {/* <h1>Wshlist Page</h1> */}
            <Loader />
            <PageNotFound />
        </>
    )
}
export default Wishlist;