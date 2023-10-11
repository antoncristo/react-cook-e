import { alertStore } from '@cooke/stores/alert-store';

export const successHandler = ({ msg = 'SUCCESS!' }: { msg?: string }) => {
	alertStore.setAlert({ msg });
};
