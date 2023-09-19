import { type User } from '@cooke/types';
import { type UserServiceApi } from './user.interface';

class UserService implements UserServiceApi {
	login = async (cred: Credentials): Promise<User> =>
		Promise.resolve({ id: '1-2-3-4', fullName: 'Anton Cristo' });
}

export const userService = new UserService();
