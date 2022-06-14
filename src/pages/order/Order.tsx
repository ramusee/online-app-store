import React, {FC} from 'react';
import OrderHeader from "../../components/orderComponents/header/OrderHeader";
import OrderMain from "../../components/orderComponents/OrderMain";
import "./order.css"
const Order: FC = () => {

	return (
		<>
			<OrderHeader/>
			<OrderMain/>
		</>
	);
};

export default Order;