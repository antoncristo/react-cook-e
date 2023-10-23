import { useTranslation } from 'react-i18next';
import { useGetPreferences } from '@cooke/api/preferences';

export const useInitPreferences = () => {
	const { preferences, isPreferencesPending, isPreferencesError } = useGetPreferences({});
	const { i18n } = useTranslation();

	if (preferences?.language !== undefined && preferences.language !== i18n.language) {
		queueMicrotask(async () => i18n.changeLanguage(preferences.language));
	}

	return {
		isPreferencesPending,
		isPreferencesError
	};
};
