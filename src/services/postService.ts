import http from 'helpers/http';
import config from 'config';
import { Post } from 'models/post';

const postService = {
	list: (token?: string) => {
		return http(token).get<{ success: boolean; data: Post[]; pagination: { total: number } }>(config.API.END_POINT.CRUD_POST);
	}
};

export default postService;
