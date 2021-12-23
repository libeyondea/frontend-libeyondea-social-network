import * as appStateConstant from 'constants/appState';
import { createReducer } from '@reduxjs/toolkit';
import { appInitializedSuccessAction, appSidebarSuccessAction } from './actions';

export type AppInitialized = typeof appStateConstant.APP_STATE_INITIALIZED_YES | typeof appStateConstant.APP_STATE_INITIALIZED_NO;

export type AppSidebar = typeof appStateConstant.APP_STATE_SIDEBAR_YES | typeof appStateConstant.APP_STATE_SIDEBAR_NO;

type AppState = {
	initialized: AppInitialized;
	sidebar: AppSidebar;
};

const initialState: AppState = {
	initialized: appStateConstant.APP_STATE_INITIALIZED_NO,
	sidebar: appStateConstant.APP_STATE_SIDEBAR_YES
};

const appReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(appInitializedSuccessAction, (state, action) => ({
			...state,
			initialized: action.payload.initialized
		}))
		.addCase(appSidebarSuccessAction, (state, action) => ({
			...state,
			sidebar: action.payload.sidebar
		}));
});

export default appReducer;
