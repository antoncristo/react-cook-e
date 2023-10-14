import { useMutation } from 'react-query';
import { userService } from '../user.service';
import { alertStore } from '@cooke/stores/alert-store';
import { errorHandler } from '@cooke/utils';

export const REGISTER_QUERY_KEY = 'register_key';

export const useSignUp = (success: Function) => {
	const { isLoading, isError, mutate } = useMutation(
		[REGISTER_QUERY_KEY],
		async (cred: ExtendedCredentials) => userService.signUp(cred),
		{
			onSuccess() {
				alertStore.setAlert({
					msg: 'Successfully created a new user! Please login with the credentials you provided :)'
				});
				success();
			},
			onError(err) {
				errorHandler(err);
			}
		}
	);

	return {
		signUpHandler: mutate,
		isLoading,
		isError
	};
};
