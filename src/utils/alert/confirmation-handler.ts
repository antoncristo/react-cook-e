import { alertStore } from '@cooke/stores/alert-store';

export const confirmationHandler = ({
	msg,
	cb = () => null
}: {
	msg: string;
	cb?: () => void;
}) => {
	alertStore.setAlert({ msg, cb });
};
