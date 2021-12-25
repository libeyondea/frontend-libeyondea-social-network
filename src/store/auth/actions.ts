import { createAction } from '@reduxjs/toolkit';
import { Me } from 'models/auth';

export const actionTypes = {
	AUTH_CURRENT_REQUEST: 'AUTH_CURRENT_REQUEST',
	AUTH_CURRENT_SUCCESS: 'AUTH_CURRENT_SUCCESS'
};

export const authCurrentRequestAction = createAction(actionTypes.AUTH_CURRENT_REQUEST, (current: Me | null) => ({
	payload: {
		current
	}
}));

export const authCurrentSuccessAction = createAction(actionTypes.AUTH_CURRENT_SUCCESS, (current: Me | null) => ({
	payload: {
		current
	}
}));
