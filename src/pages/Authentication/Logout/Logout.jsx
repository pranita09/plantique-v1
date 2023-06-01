import "./Logout.css";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

const Logout = () => {
  document.title = "Logout | Plantique";

  return (
    <div className="page-wrapper">
      <section className="logout-container">
        <div className="logout-inner-container">
          <div className="checked-icon">
            <CheckCircleIcon />
          </div>
          <div className="logout-card-content">
            You have been successfully logged out!
          </div>
          <Link to="/">
            <div className="logout-card-action">
              <div className="back-to-home-icon">
                <KeyboardDoubleArrowLeftOutlinedIcon />
              </div>
              <div className="back-action-name">Back to Home</div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Logout;
