import { makeAutoObservable } from 'mobx';

class AlertStore {
	private _message: string = '';
	private _action: (() => void) | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}

	get message() {
		return this._message;
	}

	get showAlert() {
		return Boolean(this._message);
	}

	get hasCallback() {
		return Boolean(this._action);
	}

	setAlert({ msg, cb }: { msg: string; cb?: () => void }) {
		this._message = msg;
		this._action = cb;
	}

	confirmationAction() {
		if (this._action) {
			this._action();
		}

		this.dismiss();
	}

	dismiss() {
		this._message = '';
		this._action = undefined;
	}
}

export const alertStore = new AlertStore();
