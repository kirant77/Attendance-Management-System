// File: src/services/api.js
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000" });
export default api;
