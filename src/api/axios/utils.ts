import { getSessionStorage } from '@cooke/utils';
import { type InternalAxiosRequestConfig } from 'axios';

export const setAuthBearer = (request: InternalAxiosRequestConfig<unknown>) => {
	const accessToken = getSessionStorage('token');
	if (accessToken) {
		request.headers.Authorization = `Bearer ${accessToken}`;
	}

	return request;
};
