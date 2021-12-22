import axios, { AxiosPromise } from 'axios';
import config from 'config';

const httpRequest = {
	get: ({
		baseUrl = config.API.URL.API_URL,
		url,
		token,
		params
	}: {
		baseUrl?: string;
		url: string;
		token?: string;
		params?: any;
	}): AxiosPromise<any> => {
		return axios({
			timeout: config.REQUEST.TIMEOUT,
			method: 'get',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token || ''
			},
			params: params
		});
	},
	post: ({
		baseUrl = config.API.URL.API_URL,
		url,
		token,
		data
	}: {
		baseUrl?: string;
		url: string;
		token?: string;
		data?: any;
	}): AxiosPromise<any> => {
		return axios({
			timeout: config.REQUEST.TIMEOUT,
			method: 'post',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token || ''
			},
			data: data
		});
	},
	put: ({
		baseUrl = config.API.URL.API_URL,
		url,
		token,
		data
	}: {
		baseUrl?: string;
		url: string;
		token?: string;
		data?: any;
	}): AxiosPromise<any> => {
		return axios({
			timeout: config.REQUEST.TIMEOUT,
			method: 'put',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token || ''
			},
			data: data
		});
	},
	delete: ({
		baseUrl = config.API.URL.API_URL,
		url,
		token,
		params
	}: {
		baseUrl?: string;
		url: string;
		token?: string;
		params?: any;
	}): AxiosPromise<any> => {
		return axios({
			timeout: config.REQUEST.TIMEOUT,
			method: 'delete',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token || ''
			},
			params: params
		});
	},
	upload: ({
		baseUrl = config.API.URL.API_URL,
		url,
		token,
		data,
		files
	}: {
		baseUrl?: string;
		url: string;
		token?: string;
		data?: any;
		files?: any;
	}): AxiosPromise<any> => {
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
		return axios({
			timeout: config.REQUEST.TIMEOUT,
			method: 'post',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data',
				Authorization: 'Bearer ' + token || ''
			},
			data: formData
		});
	}
};

export default httpRequest;
