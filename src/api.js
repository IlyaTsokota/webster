import axios from "axios";
import useAuth from "./components/hooks/useAuth";

const instance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(function (config) {
    const { token } = useAuth();
    config.headers.Authorization = token || "";

    return config;
});

export default instance;
