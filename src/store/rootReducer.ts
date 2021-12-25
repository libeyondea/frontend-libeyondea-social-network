import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './app/reducers';
import authReducer from './auth/reducers';
import postReducer from './post/reducers';

export default combineReducers({
	appState: appReducer,
	authState: authReducer,
	postState: postReducer
});
