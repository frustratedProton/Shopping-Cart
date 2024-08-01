/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/shop/product/${product.id}`}>
        <h3>{product.name}</h3>
        <div className="image-price-container">
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
