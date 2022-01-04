import { createAction } from '@reduxjs/toolkit';
import { Pagination } from 'models/pagination';
import { Post } from 'models/post';
import * as actionTypes from './actionTypes';

export const postListRequestAction = createAction(actionTypes.POST_LIST_REQUEST, (page?: number, page_size?: number) => ({
	payload: {
		page,
		page_size
	}
}));

export const postListSuccessAction = createAction(actionTypes.POST_LIST_SUCCESS, (data: Post[], pagination: Pagination) => ({
	payload: {
		data,
		pagination
	}
}));
