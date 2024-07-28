import { dummyData } from '../../api.js';
import ProductCard from '../components/ProductCard.jsx';

const Store = () => {
	const dummyStuff = dummyData();

	return (
		<div className="p-4 bg-gray-100 min-h-screen">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{dummyStuff.map((elem) => (
					<ProductCard
						key={elem.id}
						image={elem.image}
						title={elem.title}
						id={elem.id}
						price={elem.price}
						description={elem.description}
						category={elem.category}
						rating={elem.rating}
					/>
				))}
			</div>
		</div>
	);
};

export default Store;