import { User } from './user';

export interface Signin {
	user_name: string;
	password: string;
}

export interface Signup {
	first_name: string;
	last_name: string;
	user_name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

export interface Me extends User {}

export interface Token {
	access_token: string;
	[key: string]: any;
}
