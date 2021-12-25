import { createReducer } from '@reduxjs/toolkit';
import { Me } from 'models/auth';
import { authCurrentSuccessAction } from './actions';

type AuthState = {
	current: Me | null;
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
