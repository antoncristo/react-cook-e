import { useMutation } from '@tanstack/react-query';
import { userService } from '../user.service';
import { confirmationHandler } from '@cooke/utils';

export const REGISTER_QUERY_KEY = 'register_key';

export const useSignUp = (success: () => void) => {
	const { isPending, isError, mutate } = useMutation({
		mutationKey: [REGISTER_QUERY_KEY],
		mutationFn: async (cred: ExtendedCredentials) => userService.signUp(cred),
		onSuccess() {
			confirmationHandler({
				msg: 'Successfully created a new user! Please login with the credentials you provided :)',
				cb: success
			});
		}
	});

	return {
		signUpHandler: mutate,
		isSignUpPending: isPending,
		isSignUpError: isError
	};
};
