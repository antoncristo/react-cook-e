export interface User {
	id: string;
	name: string;
	email: Email;
}

export interface SignInResponse {
	email: string;
	displayName: string;
	localId: string;
	registered: boolean;
}
