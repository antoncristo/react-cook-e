import { useQuery } from '@tanstack/react-query';
import { userService } from '../user.service';

export const GET_USER_KEY = 'get_user_key';

export const useGetUser = () => {
	const { data, isSuccess, isPending, isError } = useQuery({
		queryKey: [GET_USER_KEY],
		queryFn: userService.getUser,
		staleTime: 3600000
	});

	return {
		isUserSuccess: isSuccess,
		fetchedUser: data,
		isUserError: isError,
		isUserPending: isPending
	};
};
