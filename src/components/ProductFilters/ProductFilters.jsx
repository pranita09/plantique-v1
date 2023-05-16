import './ProductFilters.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { products } from '../../backend/db/products';
import { useState } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const ProductFilters = () =>{

    const [showFilter, setShowFilter] = useState(false);

    const productCategories = products.reduce((acc, {category})=> acc.includes(category) ? [...acc] : [...acc, category],[])

    const productSizes = products.reduce((acc, {size})=> acc.includes(size) ? [...acc] : [...acc, size],[]);

    const toggleFilter = () =>{
        setShowFilter((showFilter)=> !showFilter)
    }

    return(
        <div className={`product-sidebar ${showFilter} ? "show-filter" : null `}>
            <div className='filter-title-bar'>
                <div>
                    <p className='filter-heading'>Filters</p>
                </div>
                <div className='clear-wrapper-container'>
                    <p className='clear-filter'>Clear</p>
                    <div className='close-btn'><CloseRoundedIcon onClick={()=> toggleFilter}/></div>
                </div>
            </div>
            
            <div className='filters'>
                <div className='filter-wrapper'>
                    <p className='filter-title'>Categories</p>
                    <div className='filter-value filter-category'>
                        {
                            productCategories.map((category, index)=>(
                                <label key={index}>
                                    <input type='checkbox' value={category}/>
                                    <p>{category}</p>
                                </label>
                            ))
                        }
                    </div>
                </div>

                <div className='filter-wrapper'>
                    <p className='filter-title'>Size</p>
                    <div className='filter-value filter-category'>
                        {
                            productSizes.map((size, index)=>(
                                <label key={index}>
                                    <input type='checkbox' value={size} />
                                    {size}
                                </label>
                            ))
                        }
                    </div>
                </div>

                <div className='filter-wrapper'>
                    <p className='filter-title'>Availability</p>
                    <div className='filter-value filter-category'>
                        <label>
                            <input type='checkbox' />
                            Include out of Stock
                        </label>
                        <label>
                            <input type='checkbox' />
                            Fast Delivery Only
                        </label>
                        <label>
                            <input type='checkbox' />
                            On Sale
                        </label>
                    </div>
                </div> 

                <div className='filter-wrapper'>
                    <p className='filter-title'>Sort By</p>
                    <div className='filter-value filter-sort'>
                        <label>
                            <input type='radio' name='sort' />
                            Price = High to Low
                        </label>
                        <label>
                            <input type='radio' name='sort' />
                            Price = Low to High
                        </label>
                    </div>
                </div>

                <div className='filter-wrapper'>
                    <p className='filter-title'>
                        Rating
                    </p>
                    <div className='filter-value'>
                        <div className='filter-rating'>
                            <span>1 <StarRoundedIcon/></span>
                            <span>5 <StarRoundedIcon/></span>
                        </div>
                        <input type='range' min='1' max='5' step='1' list='steplist' />
                        <datalist id='steplist'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </datalist>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilters;