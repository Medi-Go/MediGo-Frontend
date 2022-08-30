import axios, { AxiosInstance } from 'axios';

const host = 'http://www.medigo.p-e.kr';

const API_ENDPOINT = host;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => Promise.reject(error),
);

export default axiosInstance;
