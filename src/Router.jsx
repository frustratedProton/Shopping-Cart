import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Store from './routes/Store';
import App from './App';

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'shop', element: <Store /> },
			],
		},
		{
			path: '/store',
			element: <Store />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
