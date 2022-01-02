import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { Action } from '@reduxjs/toolkit';
import { userSingleRequestAction, userSingleSuccessAction } from './actions';
import userService from 'services/userService';

export const userSingleEpic = (action$: Observable<Action>): Observable<Action> =>
	action$.pipe(
		filter(userSingleRequestAction.match),
		mergeMap((action) =>
			from(userService.single(action.payload.user_name)).pipe(
				map((response) => {
					if (response.data.success) {
						return userSingleSuccessAction(response.data.data);
					}
				}),
				catchError((error) => {
					return of(error);
				})
			)
		)
	);
