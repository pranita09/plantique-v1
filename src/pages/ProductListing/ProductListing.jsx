import { useState } from 'react';
import './ProductListing.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductListing.css';
import FiltersAside from './components/FiltersAside/FiltersAside';
import FiltersDrawer from './components/FiltersDrawer/FiltersDrawer';
import FiltersFooter from './components/FiltersFooter/FiltersFooter';
import ProductFilters from '../../components/ProductFilters/ProductFilters';

const ProductListing = () =>{
    const [open, setOpen] = useState(false);
    return(
        <div className='products-listing-outer-container'>
            <div className='products-filters-container'>
                <ProductFilters />
            </div>
            <div className='products-container'>
                <h2>Products</h2>
            </div>
            {/* {<FiltersAside />}
            <FiltersDrawer open={open} setOpen={setOpen}/>
            <ProductCard />
            <FiltersFooter setOpen={setOpen} /> */}
        </div>
    )
}

export default ProductListing;