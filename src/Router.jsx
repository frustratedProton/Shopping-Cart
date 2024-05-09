import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Store from './routes/Store';


const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
    {
      path: '/store',
      element: <Store />
    }
	]);

	return <RouterProvider router={router} />;
};

export default Router;
