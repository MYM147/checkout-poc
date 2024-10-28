import { Button, IconFillWarning, IconRegularWarning } from '@prism/dropcloth';
import PropTypes from 'prop-types';
import { useState } from 'react';
import RemoveProductModal from '../Modals/RemoveProductModal';

const ProductWarning = ({ onRemove }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleConfirmRemoval = () => {
		onRemove();
		handleCloseModal();
	};

	return (
		<>
			<div className='md:swdc-ml-[15%] sm:swdc-ml-2'>
				<div className='swdc-text-xs sm:swdc-flex-col'>
					<div className='swdc-flex md:swdc-order-1 swdc-order-2'>
						<div className='swdc-pr-2 swdc-w-[270px]'>
							<ul className='swdc-flex swdc-justify-evenly'>
								<li className='swdc-ml-1 hover:swdc-underline'>
									<Button
										variant='text'
										className='swdc-text-[#0069ae] swdc-text-[0.95em] hover:swdc-bg-white swdc-normal-case swdc-tracking-widest'>
										Edit
									</Button>
								</li>
								<li className='swdc-border swdc-h-2 swdc-my-auto swdc-mx-[-5px]'></li>
								<li className='hover:swdc-underline'>
									<Button
										variant='text'
										className='swdc-text-[#0069ae] swdc-text-[0.95em] hover:swdc-bg-white swdc-normal-case swdc-tracking-widest'>
										Save for Later
									</Button>
								</li>
								<li className='swdc-border swdc-h-2 swdc-my-auto swdc-mx-[-5px]'></li>
								<li className='hover:swdc-underline'>
									<Button
										variant='text'
										onClick={handleOpenModal}
										className='swdc-text-[#0069ae] swdc-text-[0.95em] hover:swdc-bg-white swdc-normal-case swdc-tracking-widest'>
										Remove
									</Button>
								</li>
							</ul>
						</div>
					</div>
					<div className='swdc-flex swdc-w-[73%] md:swdc-relative md:swdc-left-1 swdc-mb-2 swdc-px-2 swdc-order-1'>
						<div className='swdc-relative swdc-mr-1 swdc-align-middle'>
							<IconFillWarning className='swdc-icon-2 swdc-fill-[#fefe04]' />
							<div className='swdc-absolute swdc-top-0 swdc-left-0'>
								<IconRegularWarning className='swdc-icon-2' />
							</div>
						</div>
						<p className='swdc-text-[.6875rem] swdc-w-full sm:swdc-pr-2 swdc-leading-[1.2]'>
							WARNING: This product contains chemicals known to the State of
							California to cause cancer and birth defects or other reproductive
							harm.
						</p>
					</div>
				</div>
			</div>
			<RemoveProductModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onConfirm={handleConfirmRemoval}
			/>
		</>
	);
};

ProductWarning.propTypes = {
	onRemove: PropTypes.func.isRequired,
};

export default ProductWarning;
