import axios from "axios";

const BACKEND_URL = "https://swiftpay1.vercel.app/api/v1";
const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true,
})

export default axiosInstance;
