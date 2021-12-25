import { User } from './user';

export interface Signin {
	user_name: string;
	password: string;
}

export interface Me extends User {}

export interface Token {
	access_token: string;
	token_type: string;
	expires_at: string;
}
