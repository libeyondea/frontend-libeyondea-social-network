import { createReducer } from '@reduxjs/toolkit';
import { Post } from 'models/post';
import { ResponseDataReducerPagination } from 'models/reducer';
import { postListRequestAction, postListSuccessAction } from './actions';

type PostState = {
	list: ResponseDataReducerPagination<Post[]>;
};

const initialState: PostState = {
	list: {
		data: [],
		pagination: {
			total: 0
		},
		is_loading: false
	}
};

const postReducer = createReducer(initialState, (builder) => {
	builder.addCase(postListRequestAction, (state, action) => ({
		...state,
		list: {
			...state.list,
			is_loading: !state.list.data.length
		}
	}));
	builder.addCase(postListSuccessAction, (state, action) => ({
		...state,
		list: {
			...state.list,
			data: action.payload.data,
			pagination: action.payload.pagination,
			is_loading: false
		}
	}));
});

export default postReducer;
