import { Pagination } from './pagination';

export interface ResponseDataReducer<T> {
	data: T;
	is_loading: boolean;
	error: any;
}

export interface ResponseDataReducerPagination<T> extends ResponseDataReducer<T> {
	pagination: Pagination;
}
