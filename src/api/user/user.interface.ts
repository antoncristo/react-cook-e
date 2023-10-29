import { type User, type SignInResponse } from '@cooke/types';

export interface UserServiceApi {
	login: (cred: Credentials) => Promise<SignInResponse | undefined>;
	signUp: (cred: Credentials & { name: string }) => Promise<void>;
	getUser: () => Promise<User | undefined>;
}
