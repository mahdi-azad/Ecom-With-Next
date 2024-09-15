import axios from "axios";
import Cookies from "js-cookie";

// const BASE_URL = "https://staging-be-ecom.techserve4u.com/api"

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    config => {
        const token = Cookies.get(process.env.NEXT_PUBLIC_ECOM_USER); 
        if(token) {
            config.headers.Authorization = token
        }

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance;

