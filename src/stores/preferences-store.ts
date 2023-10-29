import { type Preferences } from '@cooke/types';
import { makeAutoObservable } from 'mobx';

class PreferencesStore {
	private _preferences: Preferences | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}

	get preferences() {
		return this._preferences;
	}

	set preferences(p: Preferences | undefined) {
		this._preferences = p;
	}
}

export const preferencesStore = new PreferencesStore();
