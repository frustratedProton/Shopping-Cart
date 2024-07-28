/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ProductCard = ({
	image,
	title,
	price,
	description,
	category,
	rating,
	id,
}) => {
	return ( 
		<Link
      to={`/store/${id}`} 
			className="bg-white border rounded-lg shadow-sm p-2 block hover:shadow-md transition-shadow"
		>
			<div className="relative w-full h-48 mb-2">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-contain rounded-lg"
				/>
			</div>

			<h2 className="text-lg font-semibold mb-1">{title}</h2>
			<p className="text-gray-700 text-sm mb-1">Price: ${price.toFixed(2)}</p>
			<p className="text-gray-700 text-xs mb-1">Description: {description}</p>
			<p className="text-gray-700 text-xs mb-1">Category: {category}</p>
			<p className="text-gray-700 text-xs">
				Rating: {rating.rate} ({rating.count} reviews)
			</p>
		</Link>
	);
};

export default ProductCard;
