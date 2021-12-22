import { Navigate } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import CheckAuthComponent from 'common/checkAuth/components';
import { lazy, Suspense } from 'react';

import type { RouteObject } from 'react-router-dom';

const AuthComponent = lazy(() => import('modules/auth/components'));
const MainComponent = lazy(() => import('modules/main/components'));
const SplashComponent = lazy(() => import('modules/splash/components'));

const RootRouter: RouteObject[] = [
	{
		path: `${routeConstant.ROUTE_NAME_SPLASH}`,
		element: (
			<Suspense fallback={null}>
				<SplashComponent />
			</Suspense>
		)
	},
	{
		path: `/${routeConstant.ROUTE_NAME_AUTH}/*`,
		element: (
			<Suspense fallback={null}>
				<CheckAuthComponent>
					<AuthComponent />
				</CheckAuthComponent>
			</Suspense>
		)
	},
	{
		path: `/${routeConstant.ROUTE_NAME_MAIN}/*`,
		element: (
			<Suspense fallback={null}>
				<CheckAuthComponent>
					<MainComponent />
				</CheckAuthComponent>
			</Suspense>
		)
	},
	{
		path: '*',
		element: <Navigate to={`${routeConstant.ROUTE_NAME_SPLASH}`} />
	}
];

export default RootRouter;
