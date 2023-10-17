import { observer } from 'mobx-react-lite';
import { useGetUser } from '@cooke/api/user';
import { userStore } from '@cooke/stores/user-store';

import * as Styled from './profile.styled';
import { Loader, NetworkError } from '@cooke/shared';

export const Profile = observer(() => {
	const { user } = userStore;
	const { isUserError, isUserLoading } = useGetUser();

	if (isUserLoading) {
		return <Loader size='M' />;
	}

	if (isUserError) {
		return <NetworkError />;
	}

	return <Styled.Profile>{user?.name}</Styled.Profile>;
});
