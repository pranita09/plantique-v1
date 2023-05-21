import { createContext, useContext, useState } from "react";
import signupService from "../services/auth-services/signupService";
import loginService from "../services/auth-services/loginService";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
    const [token, setToken] = useState(localStorageToken?.token);
    const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

    const signupHandler = async({firstName, lastName, email, password}) =>{
        try {
            const response = await signupService(firstName, lastName, email, password)
            const {status, data:{createdUser, encodedToken}} = response;
            if(status === 201){
                setToken(encodedToken);
                setCurrentUser(createdUser);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const loginHandler = async({email, password}) =>{
        try {
            const response = await loginService(email, password);
            const {status, data:{foundUser, encodedToken}} = response;
            if(status === 200 ){
                localStorage.setItem("loginDetails", JSON.stringify({user: foundUser, token: encodedToken}))
                setToken(encodedToken);
                setCurrentUser(foundUser);
            }
        } catch (error) {
            console.log(error)
            toast.error('Wrong Information!');
        }
    }

    return(
        <AuthContext.Provider value={{ signupHandler, token, currentUser, loginHandler }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)