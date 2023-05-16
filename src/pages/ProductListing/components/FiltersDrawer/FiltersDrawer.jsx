import "./FiltersDrawer.css";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const FiltersDrawer = ({open, setOpen}) =>{
    const maxValue = 1500;
    return(
        <div className={`filters-drawer ${open && 'filters-drawer-active'}`}>
                <CloseRoundedIcon onClick={()=> setOpen(false)}/>
                <div className="filters-header">
                    <p>Filters</p>
                    <p>Clear</p>
                </div>
                <div className="filters-item">
                    <p>Price</p>
                    <div className="input-container">
                        <label style={{display: 'flex'}}>
                            <span>0 </span>
                            <input type='range' className="slider" min='0' max={maxValue}/>
                            <span> {maxValue}</span>
                        </label>
                    </div>
                </div>
                <div className="filters-item">
                    <p>Categories</p>
                    <div className="input-container">
                        <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Flowering</label>
                        </div>
                        <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Fruit</label>
                        </div>
                        <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Medicinal</label>
                        </div>
                        <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Indoor</label>
                        </div>
                        <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Outdoor</label>
                        </div>
                    </div>
                </div>
                <div className="filters-item">
                    <p>Sizes</p>
                    <div className="input-container">
                    <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Small</label>
                        </div>
                        <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Medium</label>
                        </div>
                    </div>
                </div>
                <div className="filters-item">
                    <p>Availability</p>
                    <div className="input-container">
                    <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Include Out of Stock</label>
                        </div>
                        <div className="input-container-box">
                            <input type='checkbox' />
                            <label>Fast Delivery Only</label>
                        </div>
                        <div className="input-container-box">
                            <input type='checkbox' />
                            <label>On Sale</label>
                        </div>
                    </div>
                </div>
                <div className="filters-item">
                    <p>Rating</p>
                    <div className="input-container">
                        <div className="input-container-box">
                            <input type='radio' name='rating-radio' />
                            <label>4 stars {'&'} above</label>
                        </div>
                        <div className="input-container-box">
                            <input type='radio' name='rating-radio' />
                            <label>3 stars {'&'} above</label>
                        </div>
                        <div className="input-container-box">
                            <input type='radio' name='rating-radio' />
                            <label>2 stars {'&'} above</label>
                        </div>
                    </div>
                </div>
                <div className="filters-item">
                    <p>Sort by Price</p>
                    <div className="input-container">
                        <div className='input-container-box'>
                            <input type='radio' name='sort-radio' />
                            <label>Price - Low to High</label>
                        </div>
                        <div className='input-container-box'>
                            <input type='radio' name='sort-radio' />
                            <label>Price - High to Low</label>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default FiltersDrawer;