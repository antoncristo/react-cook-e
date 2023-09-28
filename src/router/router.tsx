import { RouterProvider } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { userStore } from '@cooke/stores/user-store';

import { routesDelegator } from './routes.service';

export const CookeRouter = observer(() => {
	// Fix: sync with user api
	const { user } = userStore;
	const userRoutes = routesDelegator.initUserRoutes(Boolean(user));

	return <RouterProvider router={userRoutes} />;
});
