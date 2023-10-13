import { type SignInResponse } from '@cooke/types';
import { type AxiosResponse } from 'axios';

export interface UserServiceApi {
	login: (cred: Credentials) => Promise<AxiosResponse<SignInResponse>>;
}
