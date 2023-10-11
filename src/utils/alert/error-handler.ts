import { alertStore } from '@cooke/stores/alert-store';
import { AxiosError } from 'axios';

export const errorHandler = (err: unknown) => {
	if (err instanceof AxiosError) {
		alertStore.setAlert({ msg: err.response?.data });
	} else {
		alertStore.setAlert({ msg: JSON.stringify(err) });
	}
};
