import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { Action } from '@reduxjs/toolkit';
import {
	postListByUserRequestAction,
	postListByUserSuccessAction,
	postListRequestAction,
	postListSuccessAction
} from './actions';
import postService from 'services/postService';

export const postListEpic = (action$: Observable<Action>): Observable<Action> =>
	action$.pipe(
		filter(postListRequestAction.match),
		mergeMap((action) => {
			return from(postService.list(action.payload.page, action.payload.page_size)).pipe(
				map((response) => {
					if (response.data.success) {
						return postListSuccessAction(response.data.data, { total: response.data.pagination.total });
					}
				}),
				catchError((error) => {
					return of(error);
				})
			);
		})
	);

export const postListByUserEpic = (action$: Observable<Action>): Observable<Action> =>
	action$.pipe(
		filter(postListByUserRequestAction.match),
		mergeMap((action) => {
			return from(postService.listByUser(action.payload.user_name, action.payload.page, action.payload.page_size)).pipe(
				map((response) => {
					if (response.data.success) {
						return postListByUserSuccessAction(response.data.data, { total: response.data.pagination.total });
					}
				}),
				catchError((error) => {
					return of(error);
				})
			);
		})
	);
