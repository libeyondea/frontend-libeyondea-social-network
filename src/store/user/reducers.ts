import { createReducer } from '@reduxjs/toolkit';
import { User } from 'models/user';
import { ResponseDataReducer } from 'models/reducer';
import { userSingleRequestAction, userSingleResetAction, userSingleSuccessAction } from './actions';

type UserState = {
	single: ResponseDataReducer<User | null>;
};

const initialState: UserState = {
	single: {
		data: null,
		is_loading: true
	}
};

const userReducer = createReducer(initialState, (builder) => {
	builder.addCase(userSingleRequestAction, (state, action) => ({
		...state,
		single: {
			...state.single,
			is_loading: true
		}
	}));
	builder.addCase(userSingleSuccessAction, (state, action) => ({
		...state,
		single: {
			...state.single,
			data: action.payload.data,
			is_loading: false
		}
	}));
	builder.addCase(userSingleResetAction, (state, action) => ({
		...state,
		single: initialState.single
	}));
});

export default userReducer;
