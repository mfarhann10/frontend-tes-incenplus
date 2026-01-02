import type { AxiosInstance } from "axios";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
});