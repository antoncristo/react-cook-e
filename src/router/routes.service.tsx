import {
	type RouteObject,
	createBrowserRouter,
	Outlet,
	Navigate
} from 'react-router-dom';
import { Login, Dashboard, Wizard, ReadRecipe, ErrorPage } from '@cooke/views';

import { cookePathnames } from './pathnames';
import { Layout } from '../layout';

class RoutesDelegator {
	#_rootRoute: RouteObject = {
		path: '/',
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		errorElement: (
			<Layout>
				<ErrorPage />
			</Layout>
		)
	};

	#_UNAuthenticatedRoutes: RouteObject[] = [
		{
			index: true,
			path: '/',
			element: <Navigate to={cookePathnames.unauthenticatedPathNames.LOGIN} />
		},
		{ path: cookePathnames.unauthenticatedPathNames.LOGIN, element: <Login /> }
	];

	#_authenticatedRoutes: RouteObject[] = [
		{
			index: true,
			path: '/',
			element: <Navigate to={cookePathnames.authenticatedPathNames.DASHBOARD} />
		},
		{
			path: '/login',
			element: <Navigate to={cookePathnames.authenticatedPathNames.DASHBOARD} />
		},
		{
			path: cookePathnames.authenticatedPathNames.DASHBOARD,
			element: <Dashboard />
		},
		{
			path: cookePathnames.authenticatedPathNames.CREATE_RECIPE,
			element: <Wizard />
		},
		{
			path: cookePathnames.authenticatedPathNames.READ_RECIPE,
			element: <ReadRecipe />
		},
		{
			path: cookePathnames.authenticatedPathNames.EDIT_RECIPE,
			element: <Wizard />
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
