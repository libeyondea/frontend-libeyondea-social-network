import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'config';
import store from 'store';
import { removeCookie } from 'helpers/cookies';
import * as cookiesConstant from 'constants/cookies';
import toastify from './toastify';
import { authCurrentRequestAction } from 'store/auth/actions';

const instance = axios.create({
	baseURL: config.API.URL.API_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	},
	timeout: config.REQUEST.TIMEOUT
});

instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const token = store.getState().authState.current.token;
		if (config.headers && !config.headers.Authorization && token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		toastify.error();
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: Error | AxiosError) => {
		if (axios.isAxiosError(error)) {
			toastify.error(error.response?.data.message);
			if (error.response?.status === 401) {
				removeCookie(cookiesConstant.COOKIES_KEY_TOKEN);
				store.dispatch(authCurrentRequestAction(null, null));
			}
		} else {
			toastify.error();
		}
		return Promise.reject(error);
	}
);

const http = {
	get: <T>(url: string, params?: any, token?: string): Promise<AxiosResponse<T>> => {
		return instance.request<T>({
			method: 'GET',
			url: url,
			params: params,
			headers: {
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	},
	post: <T>(url: string, data?: any, token?: string): Promise<AxiosResponse<T>> => {
		return instance.request<T>({
			method: 'POST',
			url: url,
			data: data,
			headers: {
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	},
	put: <T>(url: string, data?: any, token?: string): Promise<AxiosResponse<T>> => {
		return instance.request<T>({
			method: 'PUT',
			url: url,
			data: data,
			headers: {
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	},
	delete: <T>(url: string, params?: any, token?: string): Promise<AxiosResponse<T>> => {
		return instance.request<T>({
			method: 'DELETE',
			url: url,
			params: params,
			headers: {
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	},
	upload: <T>(url: string, files?: any, data?: any, token?: string): Promise<AxiosResponse<T>> => {
		const formData = new FormData();
		if (data) {
			for (let field in data) {
				formData.set(field, data[field]);
			}
		}
		if (files) {
			for (let field in files) {
				if (files[field]) {
					formData.append(field, files[field], files[field].name);
				}
			}
		}
		return instance.request<T>({
			method: 'POST',
			url: url,
			data: formData,
			headers: {
				'Content-Type': 'multipart/form-data',
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	}
};

export default http;
