import { createReducer } from '@reduxjs/toolkit';
import { Post } from 'models/post';
import { ResponseDataReducerPagination } from 'models/reducer';
import {
	postListByUserRequestAction,
	postListByUserResetAction,
	postListByUserSuccessAction,
	postListRequestAction,
	postListSuccessAction
} from './actions';

type PostState = {
	list: ResponseDataReducerPagination<Post[]>;
	listByUser: ResponseDataReducerPagination<Post[]>;
};

const initialState: PostState = {
	list: {
		data: [],
		pagination: {
			total: 0
		},
		is_loading: true
	},
	listByUser: {
		data: [],
		pagination: {
			total: 0
		},
		is_loading: true
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

	builder.addCase(postListByUserRequestAction, (state, action) => ({
		...state,
		listByUser: {
			...state.listByUser,
			is_loading: true
		}
	}));
	builder.addCase(postListByUserSuccessAction, (state, action) => ({
		...state,
		listByUser: {
			...state.listByUser,
			data: action.payload.data,
			pagination: action.payload.pagination,
			is_loading: false
		}
	}));
	builder.addCase(postListByUserResetAction, (state, action) => ({
		...state,
		listByUser: initialState.listByUser
	}));
});

export default postReducer;
