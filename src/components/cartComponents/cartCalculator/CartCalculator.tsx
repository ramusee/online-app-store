import React, {FC} from 'react';
import './cartCalculator.css'
import {Link} from "react-router-dom";
import {IPropsCalculator} from "../../../models/IProps";


const CartCalculator: FC<IPropsCalculator> = ({cartProducts}) => {
	let sumPrice = 0
	let sumCartProducts = 0
	let sumPriceDiscount = 0
	cartProducts.forEach(cartProduct =>
		sumPrice += (cartProduct.price * cartProduct.count))
	cartProducts.forEach(cartProduct =>
		sumCartProducts += cartProduct.count
	)
	cartProducts.forEach(cartProduct =>
			sumPriceDiscount += Math.round(cartProduct.count * (cartProduct.price -
				(cartProduct.price / 100 * cartProduct.discount)))
	)
	let sumDiscount = sumPrice - sumPriceDiscount
	return (
		<section className="cart__calc">
			<Link to="/order" className="calc__btn">Перейти к оформлению</Link>
			<div className="calc__container">
				<span className="calc__title">Ваша корзина</span>
				<div className="calc__item">
					<span>Товары({sumCartProducts})</span>
					<span className="calc__price">{sumPrice.toLocaleString()} ₽</span>
				</div>
				{!!sumDiscount && <div className="calc__item">
					<span>Скидка:</span>
					<span className="calc__discount">- {sumDiscount.toLocaleString()} ₽</span>
				</div>}
			</div>
			<div className="calc__total">
				<span className="calc__all-price">Общая стоимость</span>
				<span className="calc__all-price">{sumPriceDiscount.toLocaleString()} ₽</span>
			</div>
		</section>
	);
};

export default CartCalculator;