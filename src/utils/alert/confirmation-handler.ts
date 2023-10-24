import { alertStore } from '@cooke/stores/alert-store';

export const confirmationHandler = ({ msg, cb }: { msg: string; cb?: () => void }) => {
	alertStore.setAlert(cb ? { msg, cb } : { msg });
};
