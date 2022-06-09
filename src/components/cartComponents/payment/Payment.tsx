import React, {FC} from 'react';
import {IProduct} from "../../../models/interfaces";
import './payment.css'


interface IPropsPayment {
	cartProducts: IProduct[];
}

const Payment: FC<IPropsPayment> = ({cartProducts}) => {
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
		<div className="cart__payment">
			<button className="payment__btn">Перейти к оформлению</button>
			<div className="payment__container">
				<span className="payment__title">Ваша корзина</span>
				<div className="payment__item">
					<span>Товары({sumCartProducts})</span>
					<span className="payment__price">{sumPrice} ₽</span>
				</div>
				{!!sumDiscount && <div className="payment__item">
					<span>Скидка:</span>
					<span className="payment__discount">- {sumDiscount} ₽</span>
				</div>}
			</div>
			<div className="payment__total">
				<span className="payment__all-price">Общая стоимость</span>
				<span className="payment__all-price">{sumPriceDiscount} ₽</span>
			</div>
		</div>
	);
};

export default Payment;