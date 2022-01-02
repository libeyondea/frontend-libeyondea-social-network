import { createAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export const actionTypes = {
	USER_SINGLE_REQUEST: 'USER_SINGLE_REQUEST',
	USER_SINGLE_SUCCESS: 'USER_SINGLE_SUCCESS',
	USER_SINGLE_FAIL: 'USER_SINGLE_FAIL'
};

export const userSingleRequestAction = createAction(actionTypes.USER_SINGLE_REQUEST, (user_name: string) => ({
	payload: {
		user_name
	}
}));

export const userSingleSuccessAction = createAction(actionTypes.USER_SINGLE_SUCCESS, (data: User) => ({
	payload: {
		data
	}
}));

export const userSingleFailAction = createAction(actionTypes.USER_SINGLE_FAIL, (error: any) => ({
	payload: {
		error
	}
}));
