// import { IconRegularDelete } from '@prism/dropcloth';
import { useState } from 'react';
import ProductButtons from '../Buttons/ProductButtons';
import Sidebar from '../Sidebar';
import EmptyCart from './EmptyCart';
import ShoppingCart from './ShoppingCart';

const ViewCart = () => {
	const [cartItems, setCartItems] = useState([]);
	const [nextId, setNextId] = useState(1);

	const handleProductSelect = (product) => {
		const newProduct = {
			...product,
			id: nextId,
			quantity: 1,
			imageUrl: product.imageUrl || '/path/to/default/image.jpg',
		};
		setCartItems((prevItems) => [...prevItems, newProduct]);
		setNextId((prevId) => prevId + 1);
		console.log('View Cart ', newProduct);
	};

	const updateQuantity = (productId, newQuantity) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === productId ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	const removeFromCart = (productId) => {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== productId)
		);
	};

	return (
		<div className='swdc-bg-[#fff] swdc-max-w-[995px] swdc-mx-auto swdc-pb-6'>
			<div className='swdc-flex swdc-justify-between swdc-w-full swdc-mx-auto swdc-align-middle swdc-mb-4 swdc-pb-2 swdc-pt-2 swdc-px-6 swdc-border-b swdc-border-[#e5e5e5]'>
				<h1 className='swdc-text-[28px] swdc-align-middle'>Cart</h1>
				{/* <div className='swdc-w-[60px] swdc-text-center '>
					<IconRegularDelete className='swdc-icon-1 swdc-fill-[#318bd3] swdc-mx-auto' />
					<a
						className='swdc-uppercase swdc-text-[10px] swdc-text-[#318bd3] swdc-text-center swdc-font-bold'
						onClick={handleDelete}>
						Delete
					</a>
				</div> */}
			</div>
			<ProductButtons onProductSelect={handleProductSelect} />
			{cartItems.length === 0 ? (
				<EmptyCart />
			) : (
				<div className='swdc-w-full swdc-flex swdc-mx-auto md:swdc-max-w-[942px]'>
					<ShoppingCart
						cartItems={cartItems}
						updateQuantity={updateQuantity}
						removeFromCart={removeFromCart}
					/>
					<Sidebar />
				</div>
			)}
		</div>
	);
};

export default ViewCart;
