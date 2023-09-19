import { useQuery } from 'react-query';
import { userService } from '../user.service';

export const LOGIN_QUERY_KEY = 'login_key';

export const useLogin = (cred: Credentials) => {
	const { data, isLoading, isError } = useQuery([LOGIN_QUERY_KEY, cred], async () =>
		userService.login(cred)
	);

	return {
		user: data,
		isUserLoading: isLoading,
		isUserError: isError
	};
};
