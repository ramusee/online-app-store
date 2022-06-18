import React, {FC} from 'react';
import {getTypeCard} from "../../../../helpers/isTypeCard";
import {IPropsTotal} from "../../../../models/IProps";
import "./totalContainer.css";
import {mainSlice} from "../../../../store/reducers/mainSlice";
import {userSlice} from "../../../../store/reducers/userSlice";
import {useAppDispatch} from "../../../../store/hooks/hooks";

const TotalContainer: FC<IPropsTotal> = ({
											 firstName,
											 lastName,
											 email,
											 telNumber,
											 cardNumber,
											 delivery
										 }) => {
	const {setCurrentOrderTab} = mainSlice.actions;
	const {setDefaultUserData, setDefaultCard, setDefaultAddress} = userSlice.actions;
	const dispatch = useAppDispatch();

	const handleBtnClick = () => {
		if (firstName) {
			dispatch(setDefaultUserData());
			dispatch(setCurrentOrderTab(1));
		} else if (cardNumber) {
			dispatch(setDefaultCard());
			dispatch(setCurrentOrderTab(2));

		} else {
			dispatch(setDefaultAddress());
		}
	};

	return (
		<div className="total-container">
			<div className="total-container__header">
				 <span className="total-container__title">
					 {firstName && "Получатель:"}
					 {cardNumber && "Способ оплаты:"}
					 {delivery?.address && "Доставка по адресу:"}
				 </span>
				<button className="total-container__btn"
						onClick={handleBtnClick}
				>
					Изменить
				</button>
			</div>
			<span className="total-container__content">
				{firstName && `${firstName} ${lastName}`}
				{cardNumber && `${getTypeCard(cardNumber)} ... ${cardNumber.slice(-4)}`}
				{delivery?.address && `${delivery.country}, ${delivery.city}, ${delivery.address}`}
				</span>
			{!cardNumber && <span className="total-container__small-text">
				{telNumber && `${email}, +7${telNumber}`}
				{delivery?.address && 'Доставка в течение 7 дней, с 8:00 до 18:00, без выходных'}
			</span>}
		</div>
	);
};

export default TotalContainer;