import { type User } from '@cooke/types';

export interface UserServiceApi {
	login: (cred: Credentials) => Promise<User>;
}
