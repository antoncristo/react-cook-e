import { AxiosError } from 'axios';
import { alertStore } from '@cooke/stores/alert-store';
import { userStore } from '@cooke/stores/user-store';
import i18next from '@cooke/providers/localization/i18';

export const errorHandler = (err: unknown) => {
	if (err instanceof AxiosError) {
		if (err.response?.status === 401) {
			alertStore.setAlert({ msg: i18next.t('unauthorized', { ns: 'alerts' }) });

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
