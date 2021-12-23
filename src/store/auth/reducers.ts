import { createReducer } from '@reduxjs/toolkit';
import { Me } from 'models/auth';
import { authCurrentSuccessAction } from './actions';

export type AuthCurrent = {
	token: {
		access_token: string;
	};
	user: Me;
} | null;

type AuthState = {
	current: AuthCurrent;
};

const initialState: AuthState = {
	current: null
};

const authReducer = createReducer(initialState, (builder) => {
	builder.addCase(authCurrentSuccessAction, (state, action) => ({
		...state,
		current: action.payload.current
	}));
});

export default authReducer;
