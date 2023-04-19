import axios from "axios";

const token = localStorage.getItem("token");

const http = axios.create({
  baseURL: "https://notes-api-f9r7.onrender.com/",
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : undefined;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { http };
