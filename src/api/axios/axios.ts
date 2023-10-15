import axios from 'axios';
import { setAuthBearer } from './utils';

export const axiosClient = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use(request => setAuthBearer(request));

axiosClient.interceptors.response.use(response => response);
