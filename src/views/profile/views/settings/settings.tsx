import { Loader, NetworkError } from '@cooke/shared';
import { useGetPreferences } from '@cooke/api/preferences';

import { Preferences } from './components';

import * as Styled from './settings.styled';

export const Settings = () => {
	const { preferences, isLoading, isError } = useGetPreferences({});

	if (isLoading) {
		return <Loader size='M' />;
	}

	if (isError) {
		return <NetworkError />;
	}

	return (
		<Styled.Settings>
			<Styled.SettingsSectionTitle text='Preferences' />
			<Preferences initialPreference={preferences!} />
		</Styled.Settings>
	);
};
