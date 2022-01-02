import http from 'helpers/http';
import config from 'config';
import { User } from 'models/user';
import { ResponseData } from 'models/response';

const userService = {
	single: (user_name: string) => {
		return http.get<ResponseData<User>>(`${config.API.END_POINT.CRUD_USER}/${user_name}`);
	}
};

export default userService;
