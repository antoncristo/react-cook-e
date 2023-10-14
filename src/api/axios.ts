import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use(request => request);

axiosClient.interceptors.response.use(response => response);
