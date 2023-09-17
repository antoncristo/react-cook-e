import {
	type RouteObject,
	createBrowserRouter,
	Outlet,
	Navigate
} from 'react-router-dom';

import { cookePathnames } from './pathnames';

class RoutesDelegator {
	#_rootRoute: RouteObject = {
		path: '/',
		element: (
			<div>
				LAYOUT
				<Outlet />
			</div>
		),
		errorElement: <div>404</div>
	};

	#_UNAuthenticatedRoutes: RouteObject[] = [
		{
			index: true,
			path: '/',
			element: <Navigate to={cookePathnames.unauthenticatedPathNames.LOGIN} />
		},
		{ path: cookePathnames.unauthenticatedPathNames.LOGIN, element: <div>LOGIN</div> }
	];

	#_authenticatedRoutes: RouteObject[] = [
		{
			index: true,
			path: '/',
			element: <Navigate to={cookePathnames.authenticatedPathNames.DASHBOARD} />
		},
		{
			path: cookePathnames.authenticatedPathNames.DASHBOARD,
			element: <div>DASHBOARD</div>
		},
		{
			path: cookePathnames.authenticatedPathNames.CREATE_RECIPE,
			element: <div>CREATE RECIPE</div>
		},
		{
			path: cookePathnames.authenticatedPathNames.READ_RECIPE,
			element: <div>READ RECIPE</div>
		},
		{
			path: cookePathnames.authenticatedPathNames.EDIT_RECIPE,
			element: <div>EDIT RECIPE</div>
		}
	];

	initUserRoutes(isAuthenticated: boolean) {
		const userRoutes: RouteObject[] = isAuthenticated
			? this.#_authenticatedRoutes
			: this.#_UNAuthenticatedRoutes;

		this.#_rootRoute.children = userRoutes;

		return createBrowserRouter([this.#_rootRoute]);
	}
}

export const routesDelegator = new RoutesDelegator();
