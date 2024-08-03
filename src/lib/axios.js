import axios from "axios";

const BASE_URL = "https://staging-be-ecom.techserve4u.com/api"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosInstance;

