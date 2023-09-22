import axios from "axios";

const loginService = async (email, password) =>
  await axios.post(
    "https://plantique-e-commerce-backend.onrender.com/auth/login",
    {
      email: email,
      password: password,
    }
  );

const signupService = async (firstName, lastName, email, password) =>
  await axios.post(
    "https://plantique-e-commerce-backend.onrender.com/auth/signup",
    {
      firstName,
      lastName,
      email,
      password,
    }
  );

export { loginService, signupService };
