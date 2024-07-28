import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Store from './routes/Store';
import ProductDetails from './components/ProductDetails';
import App from './App';
import Cart from './components/Cart';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{	path: 'store', element: <Store /> },
			{ path: 'store/:id', element: <ProductDetails /> },
			{ path: 'cart', element: <Cart /> },
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
