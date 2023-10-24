import { useMutation } from '@tanstack/react-query';
import { userService } from '../user.service';
import { userStore } from '@cooke/stores/user-store';
import { setSessionStorage } from '@cooke/utils';

export const LOGIN_QUERY_KEY = 'login_key';

export const useLogin = () => {
	const { isPending, isError, mutate } = useMutation({
		mutationKey: [LOGIN_QUERY_KEY],
		mutationFn: async (cred: Credentials) => userService.login(cred),
		onSuccess(data) {
			if (data) {
				setSessionStorage('token', data.accessToken);
				userStore.loginHappened = true;
			}
		}
	});

	return {
		loginHandler: mutate,
		isLoginPending: isPending,
		isLoginError: isError
	};
};
