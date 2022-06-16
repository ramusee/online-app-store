import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import Payment from "./payment/Payment";
import UserForm from "./userForm/UserForm";
import "./orderMain.css"
import {userSlice} from "../../store/reducers/userSlice";

const OrderMain: FC = () => {
	const {currentOrderTab} = useAppSelector(state => state.mainReducer);
	const {userData, card} = useAppSelector(state => state.userReducer)
	const {setDefaultUserData} = userSlice.actions
	const dispatch = useAppDispatch()

	return (
		<main className="wrapper">
			<section>
				{currentOrderTab === 1 && (userData.firstName
					? <div className="order__already-auth">
						<h1 className="already-auth__title">{userData.firstName}, Вы уже зарегистрированы</h1>
						<button className="blue-btn"
								onClick={()=> dispatch(setDefaultUserData())}
						>Изменить данные</button>
					</div>
					: <UserForm/>)}
				{currentOrderTab === 2 && (card.number
					?<div className="order__already-auth">
						<h1 className="already-auth__title">Карта ...{card.number.toString().slice(-4)} добавлена</h1>
						<button className="blue-btn"
								onClick={()=> dispatch(setDefaultUserData())}
						>Изменить данные</button>
					</div>
					:<Payment/>)}
			</section>
		</main>
	);
};

export default OrderMain;