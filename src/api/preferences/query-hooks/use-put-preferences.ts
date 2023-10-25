import { useMutation } from '@tanstack/react-query';
import { preferencesService } from '../preferences.service';
import { type Preferences } from '@cooke/types';
import { successHandler } from '@cooke/utils';
import { queryClient } from '@cooke/api/query-client';
import { GET_PREFERENCES_QUERY_KEY } from './use-get-preferences';
import { useTranslation } from 'react-i18next';

const PUT_PREFERENCES_QUERY_KEY = 'put_preferences_key';

export const usePutPreferences = () => {
	const { t } = useTranslation('alerts', { keyPrefix: 'success' });
	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: [PUT_PREFERENCES_QUERY_KEY],
		mutationFn: async (update: Preferences) => preferencesService.putPreference(update),
		onSuccess() {
			void queryClient.invalidateQueries({ queryKey: [GET_PREFERENCES_QUERY_KEY] });
			successHandler({ msg: t('preferencesUpdated') });
		}
	});

	return {
		putPreferences: mutate,
		isPutPreferencesPending: isPending,
		isPutPreferencesSuccess: isSuccess
	};
};
