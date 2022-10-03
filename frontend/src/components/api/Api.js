import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
    }
})
export default api;