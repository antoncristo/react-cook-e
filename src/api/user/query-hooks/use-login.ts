import { useMutation } from 'react-query';
import { userService } from '../user.service';
import { userStore } from '@cooke/stores/user-store';
import { errorHandler, setSessionStorage } from '@cooke/utils';

export const LOGIN_QUERY_KEY = 'login_key';

export const useLogin = () => {
	const { isLoading, isError, mutate } = useMutation(
		[LOGIN_QUERY_KEY],
		async (cred: Credentials) => userService.login(cred),
		{
			onSuccess(data) {
				setSessionStorage('token', data.accessToken);
				userStore.loginHappened = true;
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
