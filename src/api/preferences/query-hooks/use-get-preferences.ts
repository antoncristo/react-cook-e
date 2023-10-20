import { useQuery } from 'react-query';
import { preferencesService } from '../preferences.service';
import { errorHandler } from '@cooke/utils';

export const GET_PREFERENCES_QUERY_KEY = 'get_preferences_key';

export const useGetPreferences = (params: { enabled?: boolean }) => {
	const { enabled = true } = params;

	const { data, isError, isLoading } = useQuery(
		[GET_PREFERENCES_QUERY_KEY],
		preferencesService.getPreferences,
		{
			onError(err) {
				errorHandler(err);
			},
			staleTime: 3600000,
			enabled
		}
	);

	return {
		preferences: data,
		isError,
		isLoading
	};
};
