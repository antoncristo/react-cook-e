import { AxiosError } from 'axios';
import { alertStore } from '@cooke/stores/alert-store';
import * as sessionStorage from '@cooke/utils/storage';
import { userStore } from '@cooke/stores/user-store';

export const errorHandler = (err: unknown) => {
	if (err instanceof AxiosError) {
		if (err.response?.status === 401) {
			alertStore.setAlert({ msg: 'In 5 seconds you will be asked to LOG IN again' });

			setTimeout(() => {
				userStore.logOut();
			}, 5000);
		} else {
			alertStore.setAlert({ msg: err.response?.data });
		}
	} else {
		alertStore.setAlert({ msg: JSON.stringify(err) });
	}
};
