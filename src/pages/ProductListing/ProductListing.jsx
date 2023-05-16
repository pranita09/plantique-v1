import './ProductListing.css';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProducts } from '../../contexts/products-context';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const ProductListing = () =>{

    const {products, toggleFilter} = useProducts();

    return(
        <div className='products-listing-outer-container'>
            <div className='products-filters-container'>
                <ProductFilters />
            </div>
            <div className='products-outer-container'>
                <div className='products-title-bar'>
                    <div>
                        <h2>Products</h2>
                    </div>
                    <div className='filter-icon'>
                        <TuneOutlinedIcon onClick={toggleFilter}/>
                    </div>
                </div>
                <div className='products-container'>
                    {
                        products.map((product)=>(
                            <ProductCard key={product._id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductListing;