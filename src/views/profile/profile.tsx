import { observer } from 'mobx-react-lite';
import { useGetUser } from '@cooke/api/user';
import { userStore } from '@cooke/stores/user-store';
import { Loader, NetworkError } from '@cooke/shared';

import { ProfileIntro } from './components';

import * as Styled from './profile.styled';
import { useEffect } from 'react';

export const Profile = observer(() => {
	const { user } = userStore;
	const { isUserError, isUserPending, isUserSuccess, fetchedUser } = useGetUser();

	useEffect(() => {
		if (isUserSuccess) {
			userStore.user = fetchedUser;
		}
	}, [isUserSuccess]);

	if (isUserPending) {
		return <Loader size='M' />;
	}

	if (isUserError) {
		return <NetworkError />;
	}

	return (
		<Styled.Profile>
			<Styled.ProfileIntro>
				<ProfileIntro user={user!} />
			</Styled.ProfileIntro>
		</Styled.Profile>
	);
});
