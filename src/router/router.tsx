import { RouterProvider } from 'react-router-dom';
import { routesDelegator } from './routes.service';

export const CookeRouter = () => {
	// Fix: sync with user api
	const isAuthenticated: boolean = true;
	const userRoutes = routesDelegator.initUserRoutes(isAuthenticated);

	return <RouterProvider router={userRoutes} />;
};
