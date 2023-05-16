import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import './FiltersFooter.css';

const FiltersFooter = ({setOpen}) =>{
    return(
        <div className="filters-footer-container" onClick={()=> setOpen(true)}>
            <ExpandLessRoundedIcon />
            <p className='filters'>Filters</p>
        </div>
    )
}

export default FiltersFooter;