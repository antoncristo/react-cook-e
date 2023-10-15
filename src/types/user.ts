export interface User {
	uuid: string;
	name: string;
	email: Email;
}

export interface SignInResponse {
	user: User;
	accessToken: string;
}
