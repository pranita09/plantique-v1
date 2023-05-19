import '../styles.css';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SignUp = () =>{
    return(
        <div className='page-wrapper'>
            <section className='form signup'>
            <div className='form-inner-container'>
                <div className='form-content'>
                    <div className='form-header'>
                        <h2>Sign Up</h2>
                    </div>
                    <form>
                        <div className='field input-field'>
                            <input type='text' placeholder='First Name' className='input' />
                        </div>
                        <div className='field input-field'>
                            <input type='text' placeholder='Last Name' className='input' />
                        </div>
                        <div className='field input-field'>
                            <input type='email' placeholder='Email' className='input' />
                        </div>
                        <div className='field input-field'>
                            <input type='password' placeholder='Password' className='password' />
                            <VisibilityOutlinedIcon className='eye-icon'/>
                        </div>
                        <div className='field input-field'>
                            <input type='password' placeholder='Confirm Password' className='password' />
                            <VisibilityOutlinedIcon className='eye-icon'/>
                        </div>
                        <div className='field input-field'>
                            <button className='signup-btn'>Create New Account</button>
                        </div>
                        <div className='form-link'>
                            <span>Already have an account?</span>{" "}<Link to='/login'><span className='link'>Login</span></Link>
                        </div>
                    </form>
                </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp;