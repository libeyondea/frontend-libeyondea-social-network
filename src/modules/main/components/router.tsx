import { Navigate } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import { lazy, Suspense } from 'react';

import type { RouteObject } from 'react-router-dom';

const HomeComponent = lazy(() => import('./home/components'));
const BookmarkComponent = lazy(() => import('./bookmark/components'));
const SettingComponent = lazy(() => import('./setting/components'));

const MainRouter: RouteObject[] = [
	{
		path: `${routeConstant.ROUTE_NAME_MAIN_HOME}`,
		element: (
			<Suspense fallback={null}>
				<HomeComponent />
			</Suspense>
		)
	},
	{
		path: `${routeConstant.ROUTE_NAME_MAIN_BOOKMARK}`,
		element: (
			<Suspense fallback={null}>
				<BookmarkComponent />
			</Suspense>
		)
	},
	{
		path: `${routeConstant.ROUTE_NAME_MAIN_SETTING}`,
		element: (
			<Suspense fallback={null}>
				<SettingComponent />
			</Suspense>
		)
	},
	{
		path: '*',
		element: <Navigate to={`${routeConstant.ROUTE_NAME_SPLASH}`} />
	}
];

export default MainRouter;
