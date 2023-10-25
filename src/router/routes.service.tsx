import {
	type RouteObject,
	createBrowserRouter,
	Outlet,
	Navigate
} from 'react-router-dom';
import { Login, Dashboard, Wizard, ReadRecipe, Profile } from '@cooke/views';
import ErrorPage from '@cooke/views/error-page';
import { Settings } from '@cooke/views/profile/views';

import { cookePathnames } from './pathnames';
import { Layout } from '../layout';
import { NotFound } from './not-found';

class RoutesDelegator {
	#_rootRoute: RouteObject = {
		path: '/',
		element: (
			<Layout>
				<ErrorPage>
					<Outlet />
				</ErrorPage>
			</Layout>
		)
	};

	#_UNAuthenticatedRoutes: RouteObject[] = [
		{
			index: true,
			path: '/',
			element: <Navigate to={cookePathnames.unauthenticatedPathNames.LOGIN} />
		},
		{ path: cookePathnames.unauthenticatedPathNames.LOGIN, element: <Login /> },
		{
			path: '*',
			element: <NotFound />
		}
	];

	#_authenticatedRoutes: RouteObject[] = [
		{
			index: true,
			path: '/',
			element: <Navigate to={cookePathnames.authenticatedPathNames.DASHBOARD} />
		},
		{
			path: cookePathnames.unauthenticatedPathNames.LOGIN,
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
		},
		{
			path: cookePathnames.authenticatedPathNames.FAVORITES,
			element: <div>Favorites mock</div>
		},
		{
			path: cookePathnames.authenticatedPathNames.PROFILE,
			element: <Outlet />,
			children: [
				{
					index: true,
					path: cookePathnames.authenticatedPathNames.PROFILE,
					element: <Profile />
				},
				{
					path: cookePathnames.authenticatedPathNames.SETTINGS,
					element: <Settings />
				}
			]
		},
		{
			path: '*',
			element: <NotFound />
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
