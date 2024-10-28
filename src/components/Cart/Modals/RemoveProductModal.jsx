import PropTypes from 'prop-types';

const RemoveProductModal = ({ isOpen, onClose, onConfirm }) => {
	return (
		<>
			{isOpen && (
				<div
					className='swdc-fixed swdc-inset-0 swdc-flex swdc-justify-center swdc-items-center swdc-z-50'
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
					<div className='swdc-bg-white swdc-rounded-sm swdc-py-2 swdc-px-3 swdc-shadow-lg swdc-text-center swdc-relative swdc-bottom-[300px]'>
						<div className='swdc-flex swdc-w-full swdc-justify-between swdc-text-[#666666] swdc-px-1'>
							<h3 className='swdc-text-lg swdc-mb-2'>Remove Item?</h3>
							<button className='swdc-text-2xl' onClick={onClose}>
								X
							</button>
						</div>

						<div className='swdc-mt-2 swdc-px-2'>
							<button
								onClick={onConfirm}
								className='swdc-bg-[#3388e6] hover:swdc-bg-[color:#336699] swdc-text-white hover:swdc-text-white swdc-w-full swdc-my-1 swdc-px-6 swdc-py-1 sw swdc-rounded-sm swdc-font-bold swdc-text-sm'>
								Yes
							</button>
							<button
								onClick={onClose}
								className='swdc-bg-[#acacac] hover:swdc-bg-[#888] swdc-text-white hover:swdc-text-white swdc-w-full swdc-px-3 swdc-py-1 sw swdc-rounded-sm swdc-font-bold swdc-text-sm'>
								No
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

RemoveProductModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
};

export default RemoveProductModal;
