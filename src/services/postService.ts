import http from 'helpers/http';
import config from 'config';
import { Post } from 'models/post';
import { ResponseDataPagination } from 'models/response';

const postService = {
	list: (page: number = 1, page_size: number = 10) => {
		return http.get<ResponseDataPagination<Post[]>>(config.API.END_POINT.CRUD_POST, {
			page: page,
			page_size: page_size
		});
	}
};

export default postService;
