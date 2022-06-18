import React, {FC} from 'react';
import "./orderTabs.css";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {mainSlice} from "../../../../store/reducers/mainSlice";

const OrderTabs: FC = () => {
	const {currentOrderTab} = useAppSelector(state => state.mainReducer);
	const {setCurrentOrderTab} = mainSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<div className="order-tabs">
			<div className={currentOrderTab === 1 ? "order-tabs__item order-tab-active" : "order-tabs__item"}
				 onClick={() => dispatch(setCurrentOrderTab(1))}
			>
				<span
					className={currentOrderTab === 1 ? "order-tabs__icon order-icon-active" : "order-tabs__icon"}>1</span>
				Авторизация
			</div>
			<div className={currentOrderTab === 2 ? "order-tabs__item order-tab-active" : "order-tabs__item"}
				 onClick={() => dispatch(setCurrentOrderTab(2))}
			>
				<span
					className={currentOrderTab === 2 ? "order-tabs__icon order-icon-active" : "order-tabs__icon"}>2</span>
				Карта
			</div>
			<div className={currentOrderTab === 3 ? "order-tabs__item order-tab-active" : "order-tabs__item"}
				 onClick={() => dispatch(setCurrentOrderTab(3))}
			>
				<span
					className={currentOrderTab === 3 ? "order-tabs__icon order-icon-active" : "order-tabs__icon"}>3</span>
				Доставка и заказ
			</div>
		</div>
	);
};

export default OrderTabs;