import { type User, type SignInResponse } from '@cooke/types';
import { type UserServiceApi } from './user.interface';
import { axiosClient } from '@cooke/api/axios';
import { errorHandler } from '@cooke/utils';
import { userStore } from '@cooke/stores/user-store';

class UserService implements UserServiceApi {
	login = async (cred: Credentials): Promise<SignInResponse | undefined> =>
		axiosClient
			.post('auth/sign-in', cred)
			.then(res => res.data as SignInResponse)
			.catch(err => {
				errorHandler(err);
				return undefined;
			});

	signUp = async (cred: ExtendedCredentials): Promise<void> =>
		axiosClient
			.post('/auth/register', cred)
			.then(() => undefined)
			.catch(err => {
				errorHandler(err);
			});

	getUser = async (): Promise<User | undefined> =>
		axiosClient
			.get('/auth/user')
			.then(res => res.data as User)
			.catch(err => {
				errorHandler(err);
				return undefined;
			});
}

export const userService = new UserService();
