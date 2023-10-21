import { useState } from 'react';
import { type Preferences as PreferencesType } from '@cooke/types';

import * as Styled from './preferences.styled';

interface PreferencesProps {
	initialPreference: PreferencesType;
}

export const Preferences = (props: PreferencesProps) => {
	const { initialPreference } = props;
	const [update, setUpdate] = useState<PreferencesType>(initialPreference);

	return <Styled.Preferences>preferences</Styled.Preferences>;
};
