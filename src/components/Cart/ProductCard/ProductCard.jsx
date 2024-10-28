import PropTypes from 'prop-types';
import ProductDetails from './ProductDetails';
import ProductInStock from './ProductInStock';
import ProductWarning from './ProductWarning';

const ProductCard = ({ product, updateQuantity, removeFromCart }) => {
	const handleRemove = () => {
		removeFromCart(product.id);
	};

	return (
		<div className='swdc-flex swdc-flex-col swdc-border-b swdc-border-[#e5e5e5] swdc-py-4'>
			<div className='md:swdc-flex md:swdc-flex-row'>
				<ProductDetails product={product} />
				<ProductInStock
					product={product}
					updateQuantity={updateQuantity}
					onRemove={handleRemove}
				/>
			</div>
			<ProductWarning onRemove={handleRemove} />
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string,
		price: PropTypes.number.isRequired,
		salesNumber: PropTypes.string,
		productNumber: PropTypes.string,
		container: PropTypes.shape({
			size: PropTypes.string,
			sheen: PropTypes.string,
			base: PropTypes.string,
		}),
	}).isRequired,
	updateQuantity: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
};

export default ProductCard;
