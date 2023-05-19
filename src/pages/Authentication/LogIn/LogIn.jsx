import '../styles.css';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const LogIn = () =>{
    return(
        <div className='page-wrapper'>
            <section className='form login'>
                <div className='form-content'>
                    <div className='form-header'>
                        <h2>Log In</h2>
                    </div>
                    <form>
                        <div className='field input-field'>
                            <input type='email' placeholder='Email' className='input' />
                        </div>
                        <div className='field input-field'>
                            <input type='password' placeholder='Password' className='password' />
                            <VisibilityOutlinedIcon className='eye-icon'/>
                        </div>
                        <div className='field input-field'>
                            <button className='login-btn'>Log In</button>
                        </div>
                        <div className='field input-field'>
                            <button className='guest-login-btn'>Log In as a Guest</button>
                        </div>
                        <div className='form-link'>
                            <span>New to Plantique?</span>{" "}<Link to='/signup'><span className='link'>SignUp</span></Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default LogIn;