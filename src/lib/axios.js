import axios from "axios";

// const BASE_URL = "https://staging-be-ecom.techserve4u.com/api"

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors

export default axiosInstance;

