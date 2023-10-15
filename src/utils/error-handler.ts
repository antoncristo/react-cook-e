import { AxiosError } from 'axios';
import { alertStore } from '@cooke/stores/alert-store';
import * as sessionStorage from '@cooke/utils/storage';

export const errorHandler = (err: unknown) => {
	if (err instanceof AxiosError) {
		if (err.response?.status === 401) {
			sessionStorage.removeSessionStorage('token');
			alertStore.setAlert({ msg: 'In 5 seconds you will be asked to LOG IN again' });

			setTimeout(() => {
				location.pathname = '/login';
			}, 5000);
		} else {
			alertStore.setAlert({ msg: err.response?.data });
		}
	} else {
		alertStore.setAlert({ msg: JSON.stringify(err) });
	}
};
