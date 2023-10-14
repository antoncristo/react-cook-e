import { type SignInResponse } from '@cooke/types';

export interface UserServiceApi {
	login: (cred: Credentials) => Promise<SignInResponse>;
	signUp: (cred: Credentials & { name: string }) => Promise<void>;
}
