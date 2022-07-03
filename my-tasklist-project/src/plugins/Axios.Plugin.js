import axios from "axios";

export const http = axios.create({
    baseURL: 'https://some-domain.com/api/',
});