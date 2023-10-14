import { useMutation } from 'react-query';
import { userService } from '../user.service';
import { userStore } from '@cooke/stores/user-store';
import { errorHandler } from '@cooke/utils';
import { type User } from '@cooke/types';

export const LOGIN_QUERY_KEY = 'login_key';

export const useLogin = () => {
	const { isLoading, isError, mutate } = useMutation(
		[LOGIN_QUERY_KEY],
		async (cred: Credentials) => userService.login(cred),
		{
			onSuccess(data) {
				const user: User = {
					name: data.displayName,
					email: data.email,
					id: data.localId
				};

				userStore.user = user;
			},
			onError(err) {
				errorHandler(err);
			}
		}
	);

	return {
		loginHandler: mutate,
		isLoginLoading: isLoading,
		isLoginError: isError
	};
};
