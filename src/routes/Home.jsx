import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div
            className="relative p-3 flex flex-col gap-6 items-center justify-center bg-center bg-no-repeat bg-cover h-screen"
            style={{ backgroundImage: `url('../public/assets/shop-bg.jpg')`, opacity: 0.8 }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h1 className="z-10 text-9xl md:text-8xl text-center text-slate-300 drop-shadow-lg relative">
                Store Name
            </h1>
            <p className="z-10 text-slate-400 text-center text-4xl drop-shadow-lg relative">
                Store Info
            </p>
            {/* Need to customize Button to enter store later */}
            <Link to="/store" className="z-10">
                <button className="text-slate-500 hover:text-gray-300 transition-colors duration-300 ease-in-out">
                    Enter the store.
                </button>
            </Link>
        </div>
    );
};

export default Home;
