import { useMutation } from 'react-query';
import { userService } from '../user.service';
import { userStore } from '@cooke/stores/user-store';
import { errorHandler, setSessionStorage } from '@cooke/utils';
import { type User } from '@cooke/types';

export const LOGIN_QUERY_KEY = 'login_key';

export const useLogin = () => {
	const { isLoading, isError, mutate } = useMutation(
		[LOGIN_QUERY_KEY],
		async (cred: Credentials) => userService.login(cred),
		{
			onSuccess(data) {
				const user: User = {
					name: data.user.name,
					email: data.user.email,
					uuid: data.user.uuid
				};

				setSessionStorage('token', data.accessToken);
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
