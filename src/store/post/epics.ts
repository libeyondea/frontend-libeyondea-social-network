import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { Action } from '@reduxjs/toolkit';
import { postListRequestAction, postListSuccessAction } from './actions';
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
					console.log('error: ', error);
					return of(error);
				})
			);
		})
	);
