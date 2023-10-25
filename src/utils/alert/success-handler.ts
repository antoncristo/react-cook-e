import { alertStore } from '@cooke/stores/alert-store';
import i18next from '@cooke/providers/localization/i18';

export const successHandler = ({
	msg = i18next.t('defaultSuccess', { ns: 'alerts' })
}: {
	msg?: string;
}) => {
	alertStore.setAlert({ msg });
};
