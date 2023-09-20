import { useMutation } from 'react-query';
import { userService } from '../user.service';
import { userStore } from '@cooke/stores/user-store';

export const LOGIN_QUERY_KEY = 'login_key';

export const useLogin = () => {
	const { isLoading, isError, mutate } = useMutation(
		[LOGIN_QUERY_KEY],
		async (cred: Credentials) => userService.login(cred),
		{
			onSuccess: async data => Promise.resolve(userStore.set(data))
		}
	);

	return {
		loginHandler: mutate,
		isLoginLoading: isLoading,
		isLoginError: isError
	};
};
