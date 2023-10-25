import { type ChangeEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type Preferences as PreferencesType } from '@cooke/types';
import { EditIcon } from '@cooke/assets';
import { Button, Loader } from '@cooke/shared';
import { confirmationHandler, recordUpdate } from '@cooke/utils';
import { usePutPreferences } from '@cooke/api/preferences';

import { Language } from './components';

import * as Styled from './preferences.styled';
import * as StyledParent from '../../settings.styled';

interface PreferencesProps {
	initialPreference: PreferencesType;
}

export const Preferences = (props: PreferencesProps) => {
	const { initialPreference } = props;
	const { i18n, t } = useTranslation(['profile', 'alerts']);
	const { isPutPreferencesPending, putPreferences } = usePutPreferences();
	const [update, setUpdate] = useState<PreferencesType>(initialPreference);
	const [isEditMode, setIsEditMode] = useState(false);

	const onLanguageChange: ChangeEventHandler<HTMLSelectElement> = change => {
		const selectedLang = change.currentTarget.value;
		const newPreference = recordUpdate<PreferencesType>(
			update,
			'language',
			selectedLang as CookeLanguages
		);
		setUpdate(newPreference);
	};

	const toggleEditMode = () => {
		setIsEditMode(prev => !prev);
	};

	const onPreSaveChanges = () => {
		confirmationHandler({
			msg: t('alerts:confirmations.confirmPreferences'),
			cb: onSaveChanges
		});
	};

	const onSaveChanges = () => {
		toggleEditMode();
		void i18n.changeLanguage(update.language);
		putPreferences(update);
	};

	const onResetEditMode = () => {
		setIsEditMode(false);
		setUpdate(initialPreference);
	};

	return (
		<Styled.Preferences>
			<StyledParent.SettingHeader>
				<StyledParent.SectionTitle text={t('profile:settings.preferences.header')} />
				<Button
					disabled={isEditMode}
					onClick={toggleEditMode}
					style={{ fontSize: '1.4rem' }}
				>
					<EditIcon right='1rem' /> {t('profile:settings.controls.edit')}
				</Button>
			</StyledParent.SettingHeader>
			<Language
				currentLng={update.language}
				onChange={onLanguageChange}
				isEditMode={isEditMode}
			/>
			{isPutPreferencesPending ? (
				<Loader size='S' />
			) : (
				<Styled.Footer>
					<Button
						width='fit-content'
						disabled={!isEditMode}
						onClick={onPreSaveChanges}
						style={{ fontSize: '1.4rem' }}
					>
						{t('profile:settings.controls.saveEdit')}
					</Button>
					<Button
						width='fit-content'
						variant='secondary'
						disabled={!isEditMode}
						onClick={onResetEditMode}
						style={{ fontSize: '1.4rem' }}
					>
						{t('profile:settings.controls.cancelEdit')}
					</Button>
				</Styled.Footer>
			)}
		</Styled.Preferences>
	);
};
