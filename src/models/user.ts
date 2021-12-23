export interface User {
	id: number;
	first_name: string;
	last_name: string;
	user_name: string;
	avatar_url: string;
	created_at: string | null;
	updated_at: string | null;
	email?: string;
	email_verified_at?: string | null;
	is_following?: boolean;
}
