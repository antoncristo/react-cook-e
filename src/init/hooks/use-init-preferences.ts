import { useTranslation } from 'react-i18next';
import { useGetPreferences } from '@cooke/api/preferences';
import { preferencesStore } from '@cooke/stores/preferences-store';

export const useInitPreferences = () => {
	const { isPreferencesPending, isPreferencesError } = useGetPreferences({});
	const { i18n } = useTranslation();

	if (
		preferencesStore.preferences?.language !== undefined &&
		preferencesStore.preferences.language !== i18n.language
	) {
		queueMicrotask(async () =>
			i18n.changeLanguage(preferencesStore.preferences!.language)
		);
	}

	return {
		isPreferencesPending,
		isPreferencesError
	};
};
