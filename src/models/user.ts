export interface User {
	id: number;
	first_name: string;
	last_name: string;
	user_name: string;
	avatar_url: string;
	created_at: string | null;
	updated_at: string | null;
	total_posts: number;
	total_followers: number;
	total_following: number;
	email?: string;
	email_verified_at?: string | null;
	is_following?: boolean;
}
