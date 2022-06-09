import React, {FC} from 'react';
import {mainSlice} from "../../../../store/reducers/mainSlice";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";

interface IPropsCountChanger {
	id: number;
}

const CountChanger: FC<IPropsCountChanger> = ({id }) => {
	const {changeCount, deleteCartProduct} = mainSlice.actions;
	const {cartProducts} = useAppSelector(state=> state.mainReducer.cart)
	const dispatch = useAppDispatch()

	let count = 0
	cartProducts.forEach(cartProduct => {
		if (cartProduct.id === id) {
			count = cartProduct.count
		}
	});

	const minusHandler = () => {
		if(count=== 0) return
		if(count <= 1) {
			dispatch(deleteCartProduct(id))
		}
		dispatch(changeCount({id, newCount: count - 1}))

	}
	const plusHandler = () => {
		dispatch(changeCount({id, newCount: count + 1}))
	}
	return (
		<div className="count-cart">
			<button className="count-cart__btn"
					onClick={minusHandler}
			>−</button>
			<span>{count} шт.</span>
			<button className="count-cart__btn"
					onClick={plusHandler}
			>+</button>
		</div>
	);
};

export default CountChanger;