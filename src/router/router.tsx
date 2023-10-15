import { RouterProvider } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { userStore } from '@cooke/stores/user-store';

import { routesDelegator } from './routes.service';

export const CookeRouter = observer(() => {
	const { loginHappened } = userStore;
	const userRoutes = routesDelegator.initUserRoutes(
		loginHappened || userStore.isAuthenticated()
	);

	return <RouterProvider router={userRoutes} />;
});
