import axios from "axios";
import { API_URL } from "../utils/constants";

const loginService = async (email, password) =>
  await axios.post(`${API_URL}/auth/login`, {
    email: email,
    password: password,
  });

const signupService = async (firstName, lastName, email, password) =>
  await axios.post(`${API_URL}/auth/signup`, {
    firstName,
    lastName,
    email,
    password,
  });

export { loginService, signupService };
