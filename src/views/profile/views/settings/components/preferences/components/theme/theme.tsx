import { type ChangeEventHandler, type Dispatch, type SetStateAction } from 'react';
import { useThemeContext } from '@cooke/style';
import { Label, Select, Option } from '@cooke/shared';
import { useTranslation } from 'react-i18next';
import { type Preferences } from '@cooke/types';
import { recordUpdate } from '@cooke/utils';

import * as Styled from './theme.styled';

interface ThemeProps {
	preferences: Preferences;
	setPreferences: Dispatch<SetStateAction<Preferences>>;
	isEditMode: boolean;
}

export const Theme = (props: ThemeProps) => {
	const { isEditMode, preferences, setPreferences } = props;
	const cookeTheme = useThemeContext();
	const { t } = useTranslation('profile', { keyPrefix: 'settings.preferences' });
	const options: ColorScheme[] = ['dark', 'light'];

	const onThemeChange: ChangeEventHandler<HTMLSelectElement> = change => {
		const selectedTheme = change.currentTarget.value;
		const newPreference = recordUpdate<Preferences>(
			preferences,
			'colorScheme',
			selectedTheme as ColorScheme
		);
		setPreferences(newPreference);
	};

	return (
		<Styled.Theme>
			<Label htmlFor='theme' text={`${t('theme') as string} :`} fontSize='1.4rem' />
			{isEditMode ? (
				<Select onChange={onThemeChange} id='theme'>
					{options.map(op => (
						<Option
							key={op}
							selected={preferences.colorScheme === op}
							label={op}
							value={op}
						/>
					))}
				</Select>
			) : (
				<Label
					text={preferences.colorScheme}
					fontSize='1.8rem'
					style={{ color: `rgba(${cookeTheme.colors.primary})`, fontWeight: 'bold' }}
				/>
			)}
		</Styled.Theme>
	);
};
