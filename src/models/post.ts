import { Image } from './image';
import { User } from './user';

export interface Post {
	id: number;
	slug: string;
	content: string;
	created_at: string | null;
	updated_at: string | null;
	user: User;
	images: Image[];
}
