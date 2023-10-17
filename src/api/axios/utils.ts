import { getSessionStorage } from '@cooke/utils';
import { type InternalAxiosRequestConfig } from 'axios';

export const setAuthBearer = (request: InternalAxiosRequestConfig<unknown>) => {
	const accessToken = getSessionStorage('token');
	// Fix: test
	console.log('extracted token', accessToken);
	if (accessToken) {
		// Fix: test
		request.headers.Authorization = `Bearer ${accessToken}`;
		console.log('request headers', request.headers);
	}

	return request;
};
