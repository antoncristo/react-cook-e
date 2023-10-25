import { Loader, NetworkError } from '@cooke/shared';
import { Init } from '@cooke/init';
import { useGetPreferences } from '@cooke/api/preferences';

import { Preferences } from './components';

import * as Styled from './settings.styled';

export const Settings = () => {
	const { preferences, isPreferencesError, isPreferencesPending } = useGetPreferences({});

	if (isPreferencesPending) {
		return <Loader size='M' />;
	}

	if (isPreferencesError) {
		return <NetworkError />;
	}

	return (
		<Init>
			<Styled.Settings>
				<Preferences initialPreference={preferences!} />
			</Styled.Settings>
		</Init>
	);
};
