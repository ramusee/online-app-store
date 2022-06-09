import React, {FC} from 'react';
import {IProduct} from "../../../models/interfaces";
import './payment.css'


interface IPropsPayment {
	cartProducts: IProduct[];
}

const Payment: FC<IPropsPayment> = ({cartProducts}) => {
	return (
		<div className="cart__payment">
			<button className="payment_btn">Перейти к оформлению</button>
		</div>
	);
};

export default Payment;