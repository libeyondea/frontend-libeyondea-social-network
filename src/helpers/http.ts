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
		const accessToken = getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
		if (config.headers && !config.headers.Authorization && accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
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
