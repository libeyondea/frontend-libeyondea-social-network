export interface Signin {
	user_name: string;
	password: string;
}

export interface Me {
	id: number;
	first_name: string;
	last_name: string;
	user_name: string;
	avatar_url: string;
	email: string;
	email_verified_at: string | null;
	created_at: string | null;
	updated_at: string | null;
}

export interface Token {
	access_token: string;
	token_type: string;
	expires_at: string;
}
