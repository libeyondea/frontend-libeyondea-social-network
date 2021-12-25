import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'config';
import { getCookie } from './cookies';
import * as cookiesConstant from 'constants/cookies';

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
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

const http = {
	get: <T>(url: string, params?: any): Promise<AxiosResponse<T>> => {
		return instance.request<T>({
			method: 'GET',
			url: url,
			params: params,
			headers: {
				Authorization: `Bearer ${getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN)}`
			}
		});
	},
	post: <T>(url: string, data?: any): Promise<AxiosResponse<T>> => {
		return instance.request<T>({
			method: 'POST',
			url: url,
			data: data,
			headers: {
				Authorization: `Bearer ${getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN)}`
			}
		});
	},
	put: <T>(url: string, data?: any): Promise<AxiosResponse<T>> => {
		return instance.request<T>({
			method: 'PUT',
			url: url,
			data: data,
			headers: {
				Authorization: `Bearer ${getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN)}`
			}
		});
	},
	delete: <T>(url: string, params?: any): Promise<AxiosResponse<T>> => {
		return instance.request<T>({
			method: 'DELETE',
			url: url,
			params: params,
			headers: {
				Authorization: `Bearer ${getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN)}`
			}
		});
	},
	upload: <T>(url: string, files?: any, data?: any): Promise<AxiosResponse<T>> => {
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
				Authorization: `Bearer ${getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN)}`
			}
		});
	}
};

export default http;
