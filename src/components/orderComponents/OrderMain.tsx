import React, {FC} from 'react';
import {useAppSelector} from "../../store/hooks/hooks";
import Payment from "./payment/Payment";
import UserForm from "./userForm/UserForm";

const OrderMain: FC = () => {
	const {currentOrderTab} = useAppSelector(state => state.mainReducer);

	return (
		<main className="wrapper">
			<h1 className="order__title">Оформление заказа</h1>
			<section>
				{currentOrderTab === 1 && <UserForm/>}
				{currentOrderTab === 2 && <Payment/>}
			</section>
		</main>
	);
};

export default OrderMain;