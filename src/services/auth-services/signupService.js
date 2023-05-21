import axios from "axios";

const signupService = async(firstName, lastName, email, password) => await axios.post('/api/auth/signup',{
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
})

export default signupService;