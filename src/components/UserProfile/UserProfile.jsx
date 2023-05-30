import "./UserProfile.css";
import { useAuth } from "../../contexts/auth-context";

const UserProfile = () => {
  const { currentUser: user, logoutHandler } = useAuth();

  const fullname = `${user?.firstName} ${user?.lastName}`;

  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="profile-credentials">
          <p className="user-fullname">
            <span>Name: </span>
            {fullname}
          </p>
          <p className="user-email">
            <span>Email: </span>
            {user.email}
          </p>
        </div>
      </div>
      <button className="logout-btn" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
