import PropTypes from 'prop-types';
import ProductCard from './ProductCard/ProductCard';

const ShoppingCart = ({ cartItems, updateQuantity, removeFromCart }) => {
	const itemCount = cartItems.length;
	const itemText = itemCount === 1 ? '1 Item' : `${itemCount} Items`;

	return (
		<div className='swdc-w-full md:swdc-w-2/3'>
			<div className='swdc-p-1'>
				<div className='swdc-border swdc-border-[#e5e5e5]'>
					<p className='swdc-bg-[#e5e5e5] swdc-py-1 swdc-pl-2 swdc-font-bold'>
						{itemText}
					</p>
					{cartItems.map((item) => (
						<ProductCard
							key={item.id}
							product={item}
							updateQuantity={updateQuantity}
							removeFromCart={removeFromCart}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

ShoppingCart.propTypes = {
	cartItems: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired,
		})
	).isRequired,
	updateQuantity: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
