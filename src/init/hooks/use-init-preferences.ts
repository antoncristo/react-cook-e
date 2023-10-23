import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPreferences } from '@cooke/api/preferences';

export const useInitPreferences = () => {
	const { preferences, isPreferencesPending, isPreferencesError } = useGetPreferences({});
	const { i18n } = useTranslation();

	useEffect(() => {
		if (preferences?.language !== undefined && preferences.language !== i18n.language) {
			void i18n.changeLanguage(preferences.language);
		}
	}, [isPreferencesPending]);

	return {
		isPreferencesPending,
		isPreferencesError
	};
};
