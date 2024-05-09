import { Link } from "react-router-dom";

const Home = () => {
	return (
    <div>
      <h1>Store Name</h1>
      <p>Store Info</p>
      {/* Need to customize Button to enter store later */}
      <Link to="/store">
        <button>Enter the store.</button>
      </Link>
    </div>
  );
};

export default Home;
