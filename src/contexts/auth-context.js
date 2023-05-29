import { createContext, useContext, useState } from "react";
import signupService from "../services/auth-services/signupService";
import loginService from "../services/auth-services/loginService";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const navigate = useNavigate();
    const location = useLocation();

    const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
    const [token, setToken] = useState(localStorageToken?.token || "");
    const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

    const signupHandler = async({firstName, lastName, email, password}) =>{
        try {
            const response = await signupService(firstName, lastName, email, password)
            const {status, data:{createdUser, encodedToken}} = response;
            if(status === 200 || status === 201){
                localStorage.setItem("loginDetails", JSON.stringify({user: createdUser, token: encodedToken}));
                setToken(encodedToken);
                setCurrentUser(createdUser);
                toast.success(`Hi, ${createdUser.firstName}!`,{
                    icon: "👋",
                });
                navigate("/", {replace: true});
            }
        } catch (error) {
            console.log(error);
            toast.error("There was an error signing you up.")
        }
    }

    const loginHandler = async({email, password}) =>{
        try {
            const response = await loginService(email, password);
            const {status, data:{foundUser, encodedToken}} = response;
            if(status === 200 || status === 201 ){
                localStorage.setItem("loginDetails", JSON.stringify({user: foundUser, token: encodedToken}));
                setToken(encodedToken);
                setCurrentUser(foundUser);
                toast.success(`Welcome back, ${foundUser.firstName}!`,{
                    icon: "👋",
                });
                navigate(location?.state?.from?.pathname || "/" , {replace: true});
            }
        } catch (error) {
            console.log(error)
            toast.error('User does not exist! Please sign up.');
        }
    }

    const logoutHandler = () =>{
        localStorage.removeItem('loginDetails');
        setToken(null);
        setCurrentUser(null);
        toast.success('Logged out successfully!');
        navigate("/logout");
    }

    return(
        <AuthContext.Provider value={{ signupHandler, token, currentUser, loginHandler, logoutHandler }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)