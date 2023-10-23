import { useQuery } from '@tanstack/react-query';
import { preferencesService } from '../preferences.service';

export const GET_PREFERENCES_QUERY_KEY = 'get_preferences_key';

export const useGetPreferences = (params: { enabled?: boolean }) => {
	const { enabled = true } = params;

	const { data, isError, isPending } = useQuery({
		queryKey: [GET_PREFERENCES_QUERY_KEY],
		queryFn: preferencesService.getPreferences,
		enabled,
		staleTime: 3600000
	});

	return {
		preferences: data,
		isPreferencesError: isError,
		isPreferencesPending: isPending
	};
};
