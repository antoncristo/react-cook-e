import { useMutation } from 'react-query';
import { preferencesService } from '../preferences.service';
import { type Preferences } from '@cooke/types';
import { confirmationHandler, errorHandler } from '@cooke/utils';
import { queryClient } from '@cooke/api/query-client';
import { GET_PREFERENCES_QUERY_KEY } from './use-get-preferences';

const PUT_PREFERENCES_QUERY_KEY = 'put_preferences_key';

export const usePutPreferences = () => {
	const { mutate, isLoading } = useMutation(
		[PUT_PREFERENCES_QUERY_KEY],
		async (update: Preferences) => preferencesService.putPreference(update),
		{
			onSuccess() {
				void queryClient.invalidateQueries([GET_PREFERENCES_QUERY_KEY]);
				confirmationHandler({ msg: 'Successfully updated your preferences!' });
			},
			onError(err) {
				errorHandler(err);
			}
		}
	);

	return {
		putPreferences: mutate,
		isLoading
	};
};
