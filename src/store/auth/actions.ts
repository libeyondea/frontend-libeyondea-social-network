import { createAction } from '@reduxjs/toolkit';
import { AuthCurrent } from './reducers';

export const actionTypes = {
	AUTH_CURRENT_REQUEST: 'AUTH_CURRENT_REQUEST',
	AUTH_CURRENT_SUCCESS: 'AUTH_CURRENT_SUCCESS'
};

export const authCurrentRequestAction = createAction(actionTypes.AUTH_CURRENT_REQUEST, (current: AuthCurrent) => ({
	payload: {
		current
	}
}));

export const authCurrentSuccessAction = createAction(actionTypes.AUTH_CURRENT_SUCCESS, (current: AuthCurrent) => ({
	payload: {
		current
	}
}));
