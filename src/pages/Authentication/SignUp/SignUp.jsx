import '../styles.css';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from 'react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useAuth } from '../../../contexts/auth-context';

const SignUp = () =>{

    const {signupHandler} = useAuth();

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })
    const [showSignupPassword, setShowSignupPassword] = useState(false);

    const signupFormSubmitHandler = (event) => {
        event.preventDefault();
        signupHandler(userDetails);
    }

    return(
        <div className='page-wrapper'>
            <section className='form signup'>
            <div className='form-inner-container'>
                <div className='form-content'>
                    <div className='form-header'>
                        <h2>Sign Up</h2>
                    </div>
                    <form onSubmit={signupFormSubmitHandler}>
                        <div className='field input-field'>
                            <input type='text' placeholder='First Name' className='input' onChange={(event)=> setUserDetails({...userDetails, firstName: event.target.value})} required />
                        </div>
                        <div className='field input-field'>
                            <input type='text' placeholder='Last Name' className='input' onChange={(event)=> setUserDetails({...userDetails, lastName: event.target.value})} required />
                        </div>
                        <div className='field input-field'>
                            <input type='email' placeholder='Email' className='input' onChange={(event)=> setUserDetails({...userDetails, email: event.target.value})} required />
                        </div>
                        <div className='field input-field'>
                            <input type={showSignupPassword ? 'text' : 'password'} placeholder='Password' className='password' onChange={(event)=> setUserDetails({...userDetails, password: event.target.value})} required />
                            { showSignupPassword ? <VisibilityOffOutlinedIcon className='eye-icon' onClick={()=> setShowSignupPassword(!showSignupPassword)} /> : <VisibilityOutlinedIcon className='eye-icon' onClick={()=> setShowSignupPassword(!showSignupPassword)} />}
                        </div>
                        <div className='field input-field'>
                            <button type='submit' className='signup-btn'>Create New Account</button>
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