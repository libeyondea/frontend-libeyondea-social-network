import { createReducer } from '@reduxjs/toolkit';
import { authCurrentSuccessAction } from './actions';

export type AuthCurrent = {
	token: {
		access_token: string;
	};
	user: {
		id: number;
		first_name: string;
		last_name: string;
		user_name: string;
		email: string;
		email_verified_at: string | null;
		avatar_url: string | null;
		created_at: string | null;
		updated_at: string | null;
	};
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
