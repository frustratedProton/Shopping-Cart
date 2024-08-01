import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, cart, addToCart, updateQuantity, removeFromCart, loading, error } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0); // Default quantity set to 0

  useEffect(() => {
    const productId = Number(id);
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct);
  }, [id, products]);

  const cartItem = cart.find(item => item.id === Number(id));

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  const handleAddToCart = () => {
    if (product) {
      if (quantity === 0) {
        setQuantity(1);
        addToCart({ ...product, quantity: 1 });
      } else {
        updateQuantity(product.id, quantity);
      }
    }
  };

  const handleUpdateQuantity = (newQuantity) => {
    if (product) {
      if (newQuantity <= 0) {
        removeFromCart(product.id);
        setQuantity(0);
      } else {
        updateQuantity(product.id, newQuantity);
        setQuantity(newQuantity);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="product-details">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <div className="info-container">
            <p className="price">Price: ${product.price.toFixed(2)}</p>
            <p className="rating">Ratings: {product.rate} ({product.count})</p>
          </div>

          {quantity > 0 && (
            <div className="quantity-container">
              <button
                onClick={() => {
                  if (quantity > 1) {
                    handleUpdateQuantity(quantity - 1);
                  }
                }}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>Quantity: {quantity}</span>
              <button
                onClick={() => {
                  handleUpdateQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
          )}

          <button onClick={handleAddToCart} disabled={quantity > 0}>
            Add to Cart
          </button>

          {cartItem && (
            <p>Amount in Cart: {cartItem.quantity}</p>
          )}
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
