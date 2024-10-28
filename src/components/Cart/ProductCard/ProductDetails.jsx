import PropTypes from 'prop-types';

const ProductDetails = ({ product }) => {
	const getImagePath = (imagePath) => {
		console.log('Original imagePath:', imagePath);
		if (!imagePath) {
			console.log('Image path is empty or undefined');
			return null;
		}
		// If the path starts with 'http' or 'https', it's already a full URL
		if (imagePath.startsWith('http')) {
			console.log('Full URL image path:', imagePath);
			return imagePath;
		}
		// Otherwise, assume it's a relative path and prepend with the base URL
		const fullPath = `${window.location.origin}${imagePath}`;
		console.log('Relative image path converted to:', fullPath);
		return fullPath;
	};

	console.log('Product in ProductDetails:', product);

	return (
		<div className='swdc-w-full swdc-flex swdc-px-1 md:swdc-w-7/12 swdc-mb-2'>
			{product && (
				<>
					<div className='md:swdc-mr-[5px] swdc-pr-[3%] swdc-w-[28%]'>
						{getImagePath(product.image) ? (
							<img
								src={getImagePath(product.image)}
								width={92}
								height={92}
								alt={`An image of a paint can product made by ${product.name}`}
								className='md:swdc-max-w-[92px] swdc-w-full swdc-h-auto swdc-object-cover'
								onError={(e) => {
									console.error('Image failed to load:', e.target.src);
									console.error('Original image path:', product.image);
									e.target.onerror = null;
									e.target.src =
										'/public/images/duration-exterior-acrylic-latex.jpeg';
								}}
							/>
						) : (
							<div className='swdc-w-[92px] swdc-h-[92px] swdc-bg-gray-200 swdc-flex swdc-items-center swdc-justify-center swdc-text-gray-500 swdc-text-xs'>
								No Image
							</div>
						)}
					</div>
					<div className='swdc-w-[70%]'>
						<h3 className='swdc-font-bold md:swdc-text-sm swdc-text-xs'>
							{product.name || 'Unknown Product'}
						</h3>
						<p className='swdc-text-[12px] swdc-mt-[10px]'>
							Sales #: {product.salesNumber || 'N/A'}
						</p>
						<p className='swdc-text-[12px] swdc-mb-[10px]'>
							Product #: {product.productNumber || 'N/A'}
						</p>
						<div className='swdc-grid swdc-grid-cols-2 swdc-gap-x-0 swdc-gap-y-[5px] swdc-items-start'>
							<dt className='swdc-text-xs'>Container Size:</dt>
							<dd className='swdc-text-xs swdc-ml-[-1rem]'>
								{product.container?.size || 'N/A'}
							</dd>
							<dt className='swdc-text-xs'>Sheen:</dt>
							<dd className='swdc-text-xs swdc-ml-[-1rem]'>
								{product.container?.sheen || 'N/A'}
							</dd>
							<dt className='swdc-text-xs'>Base:</dt>
							<dd className='swdc-text-xs swdc-ml-[-1rem]'>
								{product.container?.base || 'N/A'}
							</dd>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

ProductDetails.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		image: PropTypes.string,
		price: PropTypes.number,
		salesNumber: PropTypes.string,
		productNumber: PropTypes.string,
		container: PropTypes.shape({
			size: PropTypes.string,
			sheen: PropTypes.string,
			base: PropTypes.string,
		}),
	}).isRequired,
};

export default ProductDetails;
