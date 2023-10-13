export interface User {
	id: string;
	idToken: string;
	name: string;
	email: Email;
}

export interface SignInResponse {
	idToken: string;
	email: string;
	displayName: string;
	localId: string;
	registered: boolean;
}
