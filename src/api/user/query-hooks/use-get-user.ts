import { useQuery } from 'react-query';
import { userService } from '../user.service';
import { userStore } from '@cooke/stores/user-store';
import { errorHandler } from '@cooke/utils';

const GET_USER_KEY = 'get_user_key';

export const useGetUser = () => {
	const { isLoading, isError } = useQuery([GET_USER_KEY], userService.getUser, {
		onSuccess(data) {
			userStore.user = data;
		},
		onError(err) {
			errorHandler(err);
		}
	});

	return {
		isUserError: isError,
		isUserLoading: isLoading
	};
};
