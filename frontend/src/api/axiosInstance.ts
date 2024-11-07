import axios from "axios";

// const BACKEND_URL = "https://fpay1.vercel.app/api/v1";
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
})

export default axiosInstance;
