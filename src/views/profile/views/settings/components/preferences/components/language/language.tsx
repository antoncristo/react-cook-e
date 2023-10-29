import { type SetStateAction, type ChangeEventHandler, type Dispatch } from 'react';
import { type Preferences } from '@cooke/types';
import { useTranslation } from 'react-i18next';
import { Label, Option, Select } from '@cooke/shared';
import { useThemeContext } from '@cooke/style';
import { recordUpdate } from '@cooke/utils';

import * as Styled from './language.styled';

interface LanguageProps {
	preferences: Preferences;
	setPreferences: Dispatch<SetStateAction<Preferences>>;
	isEditMode: boolean;
}

export const Language = (props: LanguageProps) => {
	const cookeTheme = useThemeContext();
	const { t } = useTranslation('profile', { keyPrefix: 'settings.preferences' });
	const { preferences, setPreferences, isEditMode } = props;
	const options: CookeLanguages[] = ['en', 'ru'];

	const onLanguageChange: ChangeEventHandler<HTMLSelectElement> = change => {
		const selectedLang = change.currentTarget.value;
		const newPreference = recordUpdate<Preferences>(
			preferences,
			'language',
			selectedLang as CookeLanguages
		);
		setPreferences(newPreference);
	};

	return (
		<Styled.Language>
			<Label htmlFor='lng' text={`${t('language') as string} :`} fontSize='1.4rem' />
			{isEditMode ? (
				<Select onChange={onLanguageChange} id='lng'>
					{options.map(op => (
						<Option
							key={op}
							selected={preferences.language === op}
							label={op}
							value={op}
						/>
					))}
				</Select>
			) : (
				<Label
					text={preferences.language}
					fontSize='1.8rem'
					style={{ color: `rgba(${cookeTheme.colors.primary})`, fontWeight: 'bold' }}
				/>
			)}
		</Styled.Language>
	);
};
