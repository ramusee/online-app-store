import React, {FC} from 'react';
import {mainSlice} from "../../../../store/reducers/mainSlice";
import {useAppDispatch} from "../../../../store/hooks/hooksRedux";

interface IPropsCountChanger {
	id: number;
}

const CountChanger: FC<IPropsCountChanger> = () => {
	const {addCartProducts, changeCount} = mainSlice.actions;
	const dispatch = useAppDispatch()

	return (
		<div className="count-cart">
			<button className="count-cart__btn"
					// onClick={()=> dispatch(changeCount({id, newCount: }))}

			>−</button>
			<span>{}</span>
			<button className="count-cart__btn">+</button>
		</div>
	);
};

export default CountChanger;