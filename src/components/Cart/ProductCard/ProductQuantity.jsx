import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import RemoveProductModal from '../Modals/RemoveProductModal';

const ProductQuantity = ({ onChange, price, quantity, onRemove }) => {
	const [numberOfItems, setNumberOfItems] = useState(quantity);
	const [showModal, setShowModal] = useState(false);
	const [totalPrice, setTotalPrice] = useState(price * quantity);

	useEffect(() => {
		setTotalPrice(numberOfItems * price);
	}, [numberOfItems, price]);

	useEffect(() => {
		setNumberOfItems(quantity);
	}, [quantity]);

	const handleQuantityChange = (newQuantity) => {
		setNumberOfItems(newQuantity);
		onChange(newQuantity);
	};

	const handleDecrement = () => {
		if (numberOfItems > 1) {
			handleQuantityChange(numberOfItems - 1);
		} else {
			setShowModal(true);
		}
	};

	const handleIncrement = () => {
		handleQuantityChange(numberOfItems + 1);
	};

	const handleConfirmRemoval = () => {
		setShowModal(false);
		onRemove();
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<form className='swdc-my-[15px] swdc-w-full]'>
				<div className='swdc-flex swdc-items-center'>
					<span className='swdc-border swdc-border-[#ccc] swdc-rounded-l-sm swdc-w-[35px] md:swdc-w-[28px]'>
						<button
							type='button'
							id='decrement-button'
							className='swdc-block swdc-m-0 swdc-cursor-pointer swdc-h-[40px] md:swdc-h-[28px] swdc-w-full swdc-bg-[#eaeaea] hover:swdc-bg-[#e5e7eb] swdc-align-middle swdc-text-center swdc-text-[#333]'
							onClick={handleDecrement}>
							-
						</button>
					</span>
					<input
						type='number'
						className='swdc-w-[40px] swdc-h-[42px] md:swdc-w-[35px] md:swdc-h-[30px] swdc-bg-[#fff] swdc-border swdc-border-y-[#ccc] swdc-border-x-0 swdc-text-center swdc-text-sm swdc-block swdc-py-2.5 swdc-pl-[12px] input-no-arrows swdc-pr-[12px]'
						placeholder='1'
						required
						value={numberOfItems}
						onChange={(e) => {
							const newValue = Math.max(1, parseInt(e.target.value) || 1);
							handleQuantityChange(newValue);
						}}
					/>
					<span className='swdc-border swdc-border-[#ccc] swdc-rounded-r-sm swdc-w-[35px] md:swdc-w-[28px]'>
						<button
							type='button'
							id='increment-button'
							className='swdc-block swdc-m-0 swdc-cursor-pointer swdc-h-[40px] md:swdc-h-[28px] swdc-w-full swdc-bg-[#eaeaea] hover:swdc-bg-[#e5e7eb] swdc-align-middle swdc-text-center swdc-text-[#333]'
							onClick={handleIncrement}>
							+
						</button>
					</span>
				</div>
				<div className='swdc-mt-2 swdc-hidden'>
					<span className='swdc-text-sm'>Total: ${totalPrice.toFixed(2)}</span>
				</div>
			</form>
			{showModal && (
				<RemoveProductModal
					isOpen={true}
					onClose={handleCloseModal}
					onConfirm={handleConfirmRemoval}
				/>
			)}
		</>
	);
};

ProductQuantity.propTypes = {
	onChange: PropTypes.func.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default ProductQuantity;
