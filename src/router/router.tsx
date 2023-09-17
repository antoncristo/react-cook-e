import { RouterProvider } from 'react-router-dom';
import { routesDelegator } from './routes.service';

export const CookeRouter = () => {
	// Fix: after user registration is done, sync this into "routesDelegator.initUserRoutes"
	const isAuthenticated: boolean = false;
	const userRoutes = routesDelegator.initUserRoutes(isAuthenticated);

	return <RouterProvider router={userRoutes} />;
};
