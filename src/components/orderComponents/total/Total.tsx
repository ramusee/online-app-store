import React, {FC} from 'react';
import {useAppSelector} from "../../../store/hooks/hooks";
import TotalContainer from "./totalContainer/TotalContainer";
import "./total.css"
import CartCalculator from "../../cartComponents/cartCalculator/CartCalculator";

const Total: FC = () => {
	const {mainReducer, userReducer} = useAppSelector(state => state);
	const firstName = userReducer.userData.firstName;
	const lastName = userReducer.userData.lastName;
	const email = userReducer.userData.email;
	const telNumber = userReducer.userData.telNumber;
	const cardNumber = userReducer.card.number?.toString();
	const delivery = userReducer.delivery;
	return (
		<div className="total">
			<section className="total__user">
				<TotalContainer firstName={firstName}
								lastName={lastName}
								email={email}
								telNumber={telNumber}
				/>
				<TotalContainer cardNumber={cardNumber}
				/>
				<TotalContainer delivery={delivery}
				/>
			</section>
			<CartCalculator cartProducts={mainReducer.cart.cartProducts}/>
		</div>
	);
};

export default Total;