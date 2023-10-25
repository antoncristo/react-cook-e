import { useMutation } from '@tanstack/react-query';
import { userService } from '../user.service';
import { confirmationHandler } from '@cooke/utils';
import { useTranslation } from 'react-i18next';

export const REGISTER_QUERY_KEY = 'register_key';

export const useSignUp = (success: () => void) => {
	const { t } = useTranslation('alerts', { keyPrefix: 'confirmations' });
	const { isPending, isError, mutate } = useMutation({
		mutationKey: [REGISTER_QUERY_KEY],
		mutationFn: async (cred: ExtendedCredentials) => userService.signUp(cred),
		onSuccess() {
			confirmationHandler({
				msg: t('confirmSignUp'),
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
