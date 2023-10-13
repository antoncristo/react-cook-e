import { type SignInResponse } from '@cooke/types';
import { type UserServiceApi } from './user.interface';
import { axiosClient } from '../axios';
import { type AxiosResponse } from 'axios';

class UserService implements UserServiceApi {
	login = async (cred: Credentials): Promise<AxiosResponse<SignInResponse>> =>
		axiosClient.post('auth/sign-in', cred);
}

export const userService = new UserService();
