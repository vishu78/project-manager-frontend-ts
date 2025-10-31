import axios, { AxiosError, type InternalAxiosRequestConfig, type AxiosResponse } from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5265";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

// Attach JWT to requests
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("pm_token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Global response handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 401) {
      localStorage.removeItem("pm_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
