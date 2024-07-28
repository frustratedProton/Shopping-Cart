import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="bg-slate-300 flex justify-center md:justify-between p-6 mb-0 border-b-2 md:pb-4">
			<div className="hidden md:block">
				<Link to={'/'}>
					<h2 className="hover:underline text-xl">Store Name</h2>
				</Link>
			</div>

			<div className="">
				<Link to={'/store'}>
					<h2 className="hover:underline text-xl">Store Page</h2>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
