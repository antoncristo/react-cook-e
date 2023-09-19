import { useMutation } from 'react-query';
import { userService } from '../user.service';

export const LOGIN_QUERY_KEY = 'login_key';

export const useLogin = () => {
	const { data, isLoading, isError, mutate } = useMutation(
		[LOGIN_QUERY_KEY],
		async (cred: Credentials) => userService.login(cred)
	);

	return {
		loginHandler: mutate,
		user: data,
		isUserLoading: isLoading,
		isUserError: isError
	};
};
