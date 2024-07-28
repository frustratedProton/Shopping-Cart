import { useParams } from 'react-router-dom';
import { dummyData } from '../../api.js'; 

const ProductDetails = () => {
	const { id } = useParams(); 
  console.log('Product ID:', id);
	const product = dummyData().find(item => item.id === parseInt(id, 10));
	console.log('Product Data:', product);

	if (!product) {
		return <p>Product not found.</p>;
	}

	return (
		<div className="p-4 bg-gray-100 min-h-screen">
			<div className="bg-white border rounded-lg shadow-sm p-4">
				<div className="relative w-full h-48 mb-4">
					<img
						src={product.image}
						alt={product.title}
						className="w-full h-full object-contain rounded-lg"
					/>
				</div>
				<h2 className="text-lg font-semibold mb-2">{product.title}</h2>
				<p className="text-gray-700 text-sm mb-1">ID: {product.id}</p>
				<p className="text-gray-700 text-sm mb-1">
					Price: ${product.price.toFixed(2)}
				</p>
				<p className="text-gray-700 text-xs mb-2">
					Description: {product.description}
				</p>
				<p className="text-gray-700 text-xs mb-1">
					Category: {product.category}
				</p>
				<p className="text-gray-700 text-xs mb-4">
					Rating: {product.rating.rate} ({product.rating.count} reviews)
				</p>
			</div>
		</div>
	);
};

export default ProductDetails;
