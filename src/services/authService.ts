import http from 'helpers/http';
import config from 'config';
import { Me, Signin, Signup, Token } from 'models/auth';
import { ResponseData } from 'models/response';

const authService = {
	me: () => {
		return http.get<ResponseData<Me>>(config.API.END_POINT.ME);
	},
	signin: (data: Signin) => {
		return http.post<ResponseData<Token>>(config.API.END_POINT.SIGNIN, data);
	},
	signup: (data: Signup) => {
		return http.post<ResponseData<any>>(config.API.END_POINT.SIGNUP, data);
	},
	signout: () => {
		return http.post<ResponseData<any>>(config.API.END_POINT.SIGNOUT);
	}
};

export default authService;
