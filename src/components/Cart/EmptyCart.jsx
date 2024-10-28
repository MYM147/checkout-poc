import { Button } from '@prism/dropcloth';

const EmptyCart = () => {
	return (
		<div className='swdc-bg-white swdc-mx-auto swdc-mt-6'>
			<div className='swdc-w-full'>
				<div className='swdc-text-center'>
					<h2 className='swdc-font-bold swdc-text-[1.375rem] swdc-mb-4'>
						There are 0 items in your Cart.
					</h2>
					<p className='swdc-mb-4 swdc-w-[300px] swdc-mx-auto swdc-leading-[0.25px]'>
						Items added to the cart will be fulfilled by{' '}
						<span className='swdc-font-bold'>Mentor #701575</span>{' '}
						<Button
							variant='text'
							className='swdc-text-[#0069ae] hover:swdc-text-[#336699] swdc-capitalize'>
							Change Store
						</Button>
					</p>
					<Button className='swdc-bg-[#0069ae] hover:swdc-bg-[#336699] swdc-text-sm swdc-capitalize swdc-px-6 swdc-py-2'>
						Continue Shopping
					</Button>
				</div>
			</div>
		</div>
	);
};

export default EmptyCart;
