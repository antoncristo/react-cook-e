import { makeAutoObservable } from 'mobx';
import { type User } from '@cooke/types';
import * as sessionStorage from '@cooke/utils/storage';

class UserStore {
	private _user: User | undefined = undefined;
	private _loginHappened: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	get user() {
		return this._user;
	}

	set user(user: User | undefined) {
		this._user = user;
	}

	get loginHappened() {
		return this._loginHappened;
	}

	set loginHappened(didHappen: boolean) {
		this._loginHappened = didHappen;
	}

	isAuthenticated(): boolean {
		return Boolean(sessionStorage.getSessionStorage('token'));
	}
}

export const userStore = new UserStore();
