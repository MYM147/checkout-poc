import PropTypes from 'prop-types';
import DetailsTooltip from '../../Tooltips/DetailsTooltip';
import ProductPrice from './ProductPrice';

const ProductInStock = ({ product, updateQuantity, onRemove }) => {
	return (
		<div className='swdc-flex swdc-ml-2 md:swdc-ml-0 md:swdc-w-5/12 swdc-w-full'>
			<ProductPrice
				price={product.price}
				quantity={product.quantity}
				updateQuantity={(newQuantity) =>
					updateQuantity(product.id, newQuantity)
				}
				onRemove={onRemove}
			/>
			<div className='sm:swdc-border-none swdc-border-l swdc-border-[#e5e5e5] swdc-pr-6 md:swdc-pr-0 md:swdc-pl-0 sm:swdc-pr-8 swdc-pl-2'>
				<h3 className='swdc-text-[#026533] swdc-text-base swdc-font-bold'>
					In Stock
				</h3>
				<p className='swdc-text-[.8125rem]'>
					Most orders placed before Noon will be ready same day.
				</p>
				<DetailsTooltip
					text='Details'
					content='Wait until you receive a ready for pickup email before proceeding to the
          store. Orders placed outside of normal store hours or near store closing
          will be processed the next business day. Large volume orders may take
          additional time to prepare.'
				/>
			</div>
		</div>
	);
};

ProductInStock.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
	updateQuantity: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default ProductInStock;
