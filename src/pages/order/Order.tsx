import React, {FC} from 'react';
import OrderHeader from "../../components/orderComponents/header/OrderHeader";
import OrderMain from "../../components/orderComponents/OrderMain";
import "./order.css"
import {useAppSelector} from "../../store/hooks/hooks";
const Order: FC = () => {
	return (
		<>
			<OrderHeader/>
			<OrderMain/>
		</>
	);
};

export default Order;