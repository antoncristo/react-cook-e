import { type User } from '@cooke/types';
import { SettingsIcon } from '@cooke/assets';
import { Button } from '@cooke/shared';
import { useNavigate } from 'react-router-dom';
import { cookePathnames } from '@cooke/router';
import { useTranslation } from 'react-i18next';

import * as Styled from './profile-intro.styled';

interface ProfileIntroProps {
	user: User;
}

export const ProfileIntro = (props: ProfileIntroProps) => {
	const { t } = useTranslation('profile', { keyPrefix: 'settings' });
	const { user } = props;
	const navigate = useNavigate();

	const goToSettings = () => {
		navigate(cookePathnames.authenticatedPathNames.SETTINGS);
	};

	return (
		<Styled.ProfileIntro>
			<Styled.UserInfo>
				<Styled.UserInfoText text={user.name} $fontWeight='bold' fontSize='2rem' />
				<Styled.UserInfoText text={user.email} $fontWeight='normal' fontSize='1.4rem' />
			</Styled.UserInfo>
			<Styled.Controls>
				<Button onClick={goToSettings} variant='secondary' width='fit-content'>
					<SettingsIcon right='1rem' /> {t('controls.settings')}
				</Button>
			</Styled.Controls>
		</Styled.ProfileIntro>
	);
};
