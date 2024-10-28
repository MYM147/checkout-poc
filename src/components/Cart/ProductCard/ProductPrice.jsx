import PropTypes from 'prop-types';
import ProductQuantity from './ProductQuantity';

const ProductPrice = ({ price, quantity, updateQuantity, onRemove }) => {
	const handleQuantityChange = (newQuantity) => {
		updateQuantity(newQuantity);
	};

	return (
		<div>
			<div className='swdc-justify-between swdc-items-center swdc-mr-2'>
				<p className='swdc-text-sm'>
					Your Price:
					<br />
					<span className='swdc-font-bold'>${price}</span>
				</p>
				<ProductQuantity
					onChange={handleQuantityChange}
					price={price}
					quantity={quantity}
					onRemove={onRemove}
				/>
				<p className='swdc-text-sm'>
					Total: <br />
					<span className='swdc-font-bold swdc-text-lg'>
						${(price * quantity).toFixed(2)}
					</span>
				</p>
			</div>
		</div>
	);
};

ProductPrice.propTypes = {
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	updateQuantity: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default ProductPrice;
