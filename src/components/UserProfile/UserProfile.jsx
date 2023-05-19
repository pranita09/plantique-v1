import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () =>{

    const user = {
        firstname: 'Pranita',
        lastname: 'Fulsundar',
        email: 'pranitafulsundar@gmail.com'
    }

    const fullname = `${user?.firstname} ${user?.lastname}`

    return(
        <div className='profile-container'>
            <div className='profile-details'>
                <div className='profile-credentials'>
                    <p className='user-fullname'><span>Name: </span>{fullname}</p>
                    <p className='user-email'><span>Email: </span>{user.email}</p>
                </div>
            </div>
            <Link to='/logout'><button className='logout-btn'>Logout</button></Link>
        </div>
    )
}

export default UserProfile;