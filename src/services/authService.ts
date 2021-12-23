import http from 'helpers/http';
import config from 'config';
import { Me, Signin, Token } from 'models/auth';

const authService = {
	me: (token?: string) => {
		return http(token).get<{ success: boolean; data: Me }>(config.API.END_POINT.ME);
	},
	signin: (data: Signin) => {
		return http().post<{ success: boolean; data: Token }>(config.API.END_POINT.SIGNIN, data);
	},
	signout: (token?: string) => {
		return http(token).post<{ success: boolean; data: any }>(config.API.END_POINT.SIGNOUT);
	}
};

export default authService;
