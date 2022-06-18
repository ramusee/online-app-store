import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import Payment from "./payment/Payment";
import UserForm from "./userForm/UserForm";
import "./orderMain.css"
import {userSlice} from "../../store/reducers/userSlice";
import Delivery from "./delivery/Delivery";
import {getTypeCard} from "../../helpers/isTypeCard";

const OrderMain: FC = () => {
	const {currentOrderTab} = useAppSelector(state => state.mainReducer);
	const {userData, card} = useAppSelector(state => state.userReducer)
	const {setDefaultUserData, setDefaultCard} = userSlice.actions
	const dispatch = useAppDispatch()
	const cardNumber = card.number?.toString() || '**** **** **** ****'

	return (
		<main className="wrapper">
				{currentOrderTab === 1 && (userData.firstName
					? <div className="order__already-auth">
						<h1 className="order__title">{userData.firstName}, Вы уже зарегистрированы</h1>
						<button className="blue-btn"
								onClick={()=> dispatch(setDefaultUserData())}
						>Изменить данные</button>
					</div>
					: <UserForm/>)}
				{currentOrderTab === 2 && (card.number
					?<div className="order__already-auth">
						<h1 className="order__title">Карта {getTypeCard(cardNumber)} ... {cardNumber?.slice(-4)} добавлена</h1>
						<button className="blue-btn"
								onClick={()=> dispatch(setDefaultCard())}
						>Изменить данные
						</button>
					</div>
					:<Payment/>)}
			{currentOrderTab === 3 && <Delivery/>}
		</main>
	);
};

export default OrderMain;