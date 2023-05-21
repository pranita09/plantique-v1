import axios from "axios";

const loginService = async(email, password) => await axios.post('/api/auth/login',{
    email: email,
    password: password,
}) 

export default loginService;