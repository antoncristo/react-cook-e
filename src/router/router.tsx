import { RouterProvider } from 'react-router-dom';
import { useSelector } from '@legendapp/state/react';
import { userStore } from '@cooke/stores/user-store';

import { routesDelegator } from './routes.service';

export const CookeRouter = () => {
	// Fix: sync with user api
	const isAuthenticated = useSelector(() => userStore.get());
	const userRoutes = routesDelegator.initUserRoutes(Boolean(isAuthenticated));

	return <RouterProvider router={userRoutes} />;
};
