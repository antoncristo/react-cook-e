import { makeAutoObservable } from 'mobx';
import { type User } from '@cooke/types';

class UserStore {
	private _user: User | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}

	get user() {
		return this._user;
	}

	set user(user: User | undefined) {
		this._user = user;
	}
}

export const userStore = new UserStore();
