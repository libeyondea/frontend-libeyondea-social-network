import http from 'helpers/http';
import config from 'config';
import { User } from 'models/user';
import { ResponseData } from 'models/response';

const userService = {
	user: () => {
		return http.get<ResponseData<User>>(config.API.END_POINT.CRUD_USER);
	}
};

export default userService;
