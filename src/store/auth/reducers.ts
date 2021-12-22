import { createReducer } from '@reduxjs/toolkit';
import { authSuccessAction } from './actions';

type AuthState = {
	current: {
		token: any;
		user: any;
	} | null;
};

const initialState: AuthState = {
	current: null
};

const authReducer = createReducer(initialState, (builder) => {
	builder.addCase(authSuccessAction, (state, action) => ({
		...state,
		current: action.payload.current
	}));
});

export default authReducer;
