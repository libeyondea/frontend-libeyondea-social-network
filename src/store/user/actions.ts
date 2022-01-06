import { createAction } from '@reduxjs/toolkit';
import { User } from 'models/user';
import * as actionTypes from './actionTypes';

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

export const userSingleResetAction = createAction(actionTypes.USER_SINGLE_RESET);
