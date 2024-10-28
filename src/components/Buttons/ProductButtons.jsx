import { Button } from '@prism/dropcloth';
import PropTypes from 'prop-types';
import products from '../../../public/assets/products.json';

const ProductButtons = ({ onProductSelect }) => {
	const handleAddProduct = (productType) => () => {
		const product = products.brands[productType][0];
		console.log('Selected product:', product);
		onProductSelect(product);
	};

	const buttonConfig = [
		{ label: 'Add Duration Product', productType: 'duration' },
		{ label: 'Add Emerald Product', productType: 'emerald' },
		{ label: 'Add WoodScapes Product', productType: 'woodscapes' },
	];

	return (
		<div className='swdc-flex swdc-flex-col sm:swdc-flex-row sm:swdc-space-y-0 sm:swdc-space-x-4 swdc-justify-between sm:swdc-justify-around swdc-max-w-[995px] swdc-mx-auto swdc-space-y-2 swdc-mb-2'>
			{buttonConfig.map(({ label, productType }) => (
				<Button
					key={productType}
					className='swdc-bg-[#026533] hover:swdc-bg-[#194931] swdc-text-sm swdc-capitalize swdc-w-full sm:swdc-w-auto'
					onClick={handleAddProduct(productType)}>
					{label}
				</Button>
			))}
		</div>
	);
};

ProductButtons.propTypes = {
	onProductSelect: PropTypes.func.isRequired,
};

export default ProductButtons;
