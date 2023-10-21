import { type ChangeEventHandler, useState } from 'react';
import { type Preferences as PreferencesType } from '@cooke/types';
import { Language } from './components';

import * as Styled from './preferences.styled';
import * as StyledParent from '../../settings.styled';

interface PreferencesProps {
	initialPreference: PreferencesType;
}

export const Preferences = (props: PreferencesProps) => {
	const { initialPreference } = props;
	const [update, setUpdate] = useState<PreferencesType>(initialPreference);

	const onLanguageChange = () => null;

	return (
		<Styled.Preferences>
			<StyledParent.SettingHeader>
				<StyledParent.SectionTitle text='Preferences' />
			</StyledParent.SettingHeader>
			<Language
				currentLng={update.language}
				onChange={onLanguageChange}
				isEditMode={false}
			/>
		</Styled.Preferences>
	);
};
