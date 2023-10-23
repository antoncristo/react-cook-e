import { useMutation } from '@tanstack/react-query';
import { preferencesService } from '../preferences.service';
import { type Preferences } from '@cooke/types';
import { confirmationHandler } from '@cooke/utils';
import { queryClient } from '@cooke/api/query-client';
import { GET_PREFERENCES_QUERY_KEY } from './use-get-preferences';

const PUT_PREFERENCES_QUERY_KEY = 'put_preferences_key';

export const usePutPreferences = () => {
	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: [PUT_PREFERENCES_QUERY_KEY],
		mutationFn: async (update: Preferences) => preferencesService.putPreference(update),
		onSuccess() {
			void queryClient.invalidateQueries({ queryKey: [GET_PREFERENCES_QUERY_KEY] });
			confirmationHandler({ msg: 'Successfully updated your preferences!' });
		}
	});

	return {
		putPreferences: mutate,
		isPutPreferencesPending: isPending,
		isPutPreferencesSuccess: isSuccess
	};
};
