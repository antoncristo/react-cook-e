import { observer } from 'mobx-react-lite';
import { Init } from '@cooke/init';
import { useGetUser } from '@cooke/api/user';
import { userStore } from '@cooke/stores/user-store';
import { Loader, NetworkError } from '@cooke/shared';

import { ProfileIntro } from './components';

import * as Styled from './profile.styled';

export const Profile = observer(() => {
	const { user } = userStore;
	const { isUserError, isUserPending } = useGetUser();

	if (isUserPending) {
		return <Loader size='M' />;
	}

	if (isUserError) {
		return <NetworkError />;
	}

	return user ? (
		<Init>
			<Styled.Profile>
				<Styled.ProfileIntro>
					<ProfileIntro user={user} />
				</Styled.ProfileIntro>
			</Styled.Profile>
		</Init>
	) : null;
});
