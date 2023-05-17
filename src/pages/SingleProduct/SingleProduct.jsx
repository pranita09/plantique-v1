import { useProducts } from '../../contexts/products-context';
import './SingleProduct.css';

const SingleProduct = () =>{
    const {products} = useProducts();

    const currentProduct = products[0];

    return(
        <>
            <h1>Single Product Page</h1>
        </>
    )
}

export default SingleProduct;