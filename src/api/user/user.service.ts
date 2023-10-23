import { type User, type SignInResponse } from '@cooke/types';
import { type UserServiceApi } from './user.interface';
import { axiosClient } from '@cooke/api/axios';
import { errorHandler } from '@cooke/utils';

class UserService implements UserServiceApi {
	login = async (cred: Credentials): Promise<SignInResponse> =>
		axiosClient.post('auth/sign-in', cred).then(res => res.data as SignInResponse);

	signUp = async (cred: ExtendedCredentials): Promise<void> =>
		axiosClient
			.post('/auth/register', cred)
			.then(() => undefined)
			.catch(err => {
				errorHandler(err);
			});

	getUser = async (): Promise<User> =>
		axiosClient.get('/auth/user').then(res => res.data as User);
}

export const userService = new UserService();
