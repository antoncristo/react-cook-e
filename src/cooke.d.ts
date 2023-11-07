declare type AbstractObject = Record<string, unknown>;

declare type ValueOf<T> = T[keyof T];

declare type UUID = string;

declare type Email = string;

declare type Password = string;

declare interface Credentials {
	email: Email;
	password: Password;
}

interface ExtendedCredentials extends Credentials {
	name: string;
}

declare type CookeLanguages = 'en' | 'ru';
declare type ColorScheme = 'dark' | 'light';
