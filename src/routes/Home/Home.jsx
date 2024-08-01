import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Shopping Cart</h1>
      <p>Welcome to Shopping cart</p>
      <Link to="/shop" className="shop-link">Go to Store</Link>
    </div>
  );
};

export default Home;
