import { type User } from '@cooke/types';

import * as Styled from './profile-intro.styled';
import { SettingsIcon } from '@cooke/assets';
import { Button } from '@cooke/shared';

interface ProfileIntroProps {
	user: User;
}

export const ProfileIntro = (props: ProfileIntroProps) => {
	const { user } = props;
	return (
		<Styled.ProfileIntro>
			<Styled.UserInfo>
				<Styled.UserInfoText text={user.name} $fontWeight='bold' fontSize='2rem' />
				<Styled.UserInfoText text={user.email} $fontWeight='normal' fontSize='1.4rem' />
			</Styled.UserInfo>
			<Styled.Controls>
				<Button variant='secondary' width='fit-content'>
					<SettingsIcon right='1rem' /> Settings
				</Button>
			</Styled.Controls>
		</Styled.ProfileIntro>
	);
};
