import { Link } from 'react-router-dom';
import './PageNotFound.css';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';

const PageNotFound = () =>{
    return(
        <div className='page-not-found'>
            <img src="/assets/404-error.svg" alt="Page Not Found" />
            <Link to='/' style={{textDecoration: "none"}}>
                <div className='page-action'>
                    <div className='back-icon'><KeyboardDoubleArrowLeftOutlinedIcon /></div>
                    <div className="back-name">Back to Home</div>
                </div>
            </Link>
        </div>
    )
}

export default PageNotFound;