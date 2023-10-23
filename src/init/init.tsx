import { type ReactNode } from 'react';
import { useInitPreferences } from './hooks';
import { Loader, NetworkError } from '@cooke/shared';

export const Init = ({ children }: { children: ReactNode }) => {
	const { isPreferencesError, isPreferencesPending } = useInitPreferences();

	if (isPreferencesError) {
		return <NetworkError />;
	}

	if (isPreferencesPending) {
		return <Loader size='L' />;
	}

	return children;
};
