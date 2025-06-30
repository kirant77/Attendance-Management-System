// File: src/services/authService.js
import axios from "axios";

export const login = async (username, password) => {
  try {
    const res = await axios.post("http://localhost:8000/auth/login", {
      username,
      password,
    });
    return res.status === 200;
  } catch (err) {
    return false;
  }
};
