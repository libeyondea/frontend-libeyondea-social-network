import axios from 'axios';
import config from 'config';
import { getCookie } from './cookies';
import * as cookiesConstant from 'constants/cookies';

const http = (token?: string) => {
	const instance = axios.create({
		baseURL: config.API.URL.API_URL,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		timeout: config.REQUEST.TIMEOUT
	});
	if (token) {
		instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	} else if (getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN)) {
		instance.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
	}
	return instance;
};

export default http;
