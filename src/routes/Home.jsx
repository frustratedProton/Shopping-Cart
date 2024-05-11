import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div
			className="p-3 flex flex-col gap-6 items-center justify-center bg-center bg-no-repeat bg-cover h-screen font-montserrat"
			style={{ backgroundImage: `url('../public/assets/shop-bg.jpg')` }}
		>
			<h1 className="text-5xl md:text-6xl text-center text-slate-50 drop-shadow-lg">
				Store Name
			</h1>
			<p className="text-slate-50 text-center text-2xl drop-shadow-lg">
				Store Info
			</p>
			{/* Need to customize Button to enter store later */}
			<Link to="/store">
				<button className="text-slate-50 hover:text-gray-300 transition-colors duration-300 ease-in-out">
					Enter the store.
				</button>
			</Link>
		</div>
	);
};

export default Home;
