import { Navigate } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import { lazy, Suspense } from 'react';

import type { RouteObject } from 'react-router-dom';

const BookmarkUserComponent = lazy(() => import('./bookmark/components'));
const PostUserComponent = lazy(() => import('./post/components'));

const UserRouter: RouteObject[] = [
	{
		path: ``,
		element: (
			<Suspense fallback={null}>
				<PostUserComponent />
			</Suspense>
		)
	},
	{
		path: `${routeConstant.ROUTE_NAME_MAIN_USER_BOOKMARK}`,
		element: (
			<Suspense fallback={null}>
				<BookmarkUserComponent />
			</Suspense>
		)
	},
	{
		path: '*',
		element: <Navigate to={`${routeConstant.ROUTE_NAME_SPLASH}`} />
	}
];

export default UserRouter;
