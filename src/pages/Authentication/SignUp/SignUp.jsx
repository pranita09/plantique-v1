import "../styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../contexts/auth-context";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const SignUp = () => {
  const { signupHandler } = useAuth();
  document.title = "Sign Up | Plantique";

  const [userSignupDetails, setUserSignupDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    pwdMatch: true,
    hide: { pwd: true, confirmPwd: true },
  });

  const signupFormInputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "confirmPassword") {
      setUserSignupDetails({
        ...userSignupDetails,
        [name]: value,
        pwdMatch: value === userSignupDetails.password ? true : false,
      });
    } else {
      setUserSignupDetails({ ...userSignupDetails, [name]: value });
    }
  };

  const signupFormSubmitHandler = (event) => {
    event.preventDefault();
    if (!userSignupDetails.pwdMatch) {
      toast.error("Please enter valid inputs.");
    } else {
      signupHandler(userSignupDetails);
    }
  };

  return (
    <div className="page-wrapper">
      <section className="form signup">
        <div className="form-inner-container">
          <div className="form-content">
            <div className="form-header">
              <h2>Sign Up</h2>
            </div>
            <form onSubmit={signupFormSubmitHandler}>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={userSignupDetails.firstName}
                  className="input"
                  onChange={signupFormInputHandler}
                  required
                />
              </div>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={userSignupDetails.lastName}
                  className="input"
                  onChange={signupFormInputHandler}
                  required
                />
              </div>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userSignupDetails.email}
                  className="input"
                  onChange={signupFormInputHandler}
                  required
                />
              </div>
              <div className="field input-field">
                <input
                  type={userSignupDetails.hide.pwd ? "password" : "text"}
                  placeholder="Password"
                  className="password"
                  name="password"
                  value={userSignupDetails.password}
                  onChange={signupFormInputHandler}
                  required
                />
                {userSignupDetails.hide.pwd ? (
                  <VisibilityOffOutlinedIcon
                    className="eye-icon"
                    onClick={() =>
                      setUserSignupDetails({
                        ...userSignupDetails,
                        hide: {
                          ...userSignupDetails.hide,
                          pwd: !userSignupDetails.hide.pwd,
                        },
                      })
                    }
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    className="eye-icon"
                    onClick={() =>
                      setUserSignupDetails({
                        ...userSignupDetails,
                        hide: {
                          ...userSignupDetails.hide,
                          pwd: !userSignupDetails.hide.pwd,
                        },
                      })
                    }
                  />
                )}
              </div>
              <div className="field input-field">
                <input
                  type={userSignupDetails.hide.confirmPwd ? "password" : "text"}
                  placeholder="Confirm Password"
                  className="password"
                  name="confirmPassword"
                  value={userSignupDetails.confirmPassword}
                  onChange={signupFormInputHandler}
                  required
                />
                {userSignupDetails.hide.confirmPwd ? (
                  <VisibilityOffOutlinedIcon
                    className="eye-icon"
                    onClick={() =>
                      setUserSignupDetails({
                        ...userSignupDetails,
                        hide: {
                          ...userSignupDetails.hide,
                          confirmPwd: !userSignupDetails.hide.confirmPwd,
                        },
                      })
                    }
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    className="eye-icon"
                    onClick={() =>
                      setUserSignupDetails({
                        ...userSignupDetails,
                        hide: {
                          ...userSignupDetails.hide,
                          confirmPwd: !userSignupDetails.hide.confirmPwd,
                        },
                      })
                    }
                  />
                )}
                {!userSignupDetails.pwdMatch ? (
                  <div className="input-error-msg">Passwords do not match</div>
                ) : null}
              </div>
              <div className="field input-field">
                <button
                  type="submit"
                  className={
                    !userSignupDetails.pwdMatch
                      ? "signup-btn-disabled"
                      : "signup-btn"
                  }
                >
                  Create New Account
                </button>
              </div>
              <div className="form-link">
                <span>Already have an account?</span>
                <Link to="/login">
                  <span className="link">Login</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
