import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@reduxjs/toolkit';
import { authRequestAction, authSuccessAction } from './actions';

export const authEpic = (action$: Observable<Action>): Observable<Action> =>
	action$.pipe(
		filter(authRequestAction.match),
		map((action) => authSuccessAction(action.payload.current))
	);
