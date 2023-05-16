import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductListing.css';
import FiltersAside from './components/FiltersAside/FiltersAside';
import FiltersDrawer from './components/FiltersDrawer/FiltersDrawer';
import FiltersFooter from './components/FiltersFooter/FiltersFooter';

const ProductListing = () =>{
    const [open, setOpen] = useState(false);
    return(
        <div className='product-listing'>
            {<FiltersAside />}
            <FiltersDrawer open={open} setOpen={setOpen}/>
            <ProductCard />
            <FiltersFooter setOpen={setOpen} />
        </div>
    )
}

export default ProductListing;