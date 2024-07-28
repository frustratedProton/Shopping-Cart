import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const currentLocation = useLocation();
	const isActive = (path) => currentLocation.pathname === path;

	return (
		<div className="bg-slate-300 flex justify-center md:justify-between p-6 mb-0 border-b-2 md:pb-4">
			<div className="hidden md:block">
				<Link to={'/'}>
					<h2
						className={`text-xl ${
							isActive('/') ? 'underline' : 'hover:underline'
						}`}
					>
						Store Name
					</h2>
				</Link>
			</div>

			<div className="">
				<Link to={'/store'}>
					<h2
						className={`text-xl ${
							isActive('/store') ? 'underline' : 'hover:underline'
						}`}
					>
						Store Page
					</h2>
				</Link>
			</div>

			<div className="">
				<Link to={'/cart'}>
					<h2
						className={`text-xl ${
							isActive('/cart') ? 'underline' : 'hover:underline'
						}`}
					>
						Cart
					</h2>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
