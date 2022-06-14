import React from 'react';
import {Link} from "react-router-dom";
import logoIcon from "../../../images/logo.svg";
import {mainSlice} from "../../../store/reducers/mainSlice";
import {useAppDispatch} from "../../../store/hooks/hooks";
import OrderTabs from "./orderTabs/OrderTabs";

const OrderHeader = () => {
	const {setSearch, setCurrentPage} = mainSlice.actions;
	const dispatch = useAppDispatch();
	return (
		<header className="order__header wrapper">
				<Link to="/"
					  className="header__logo"
					  onClick={() => {
						  dispatch(setSearch(''));
						  dispatch(setCurrentPage(1));
					  }}
				>
					<img className="logo__image" src={logoIcon} alt="logo icon"/>
					<span className="logo__text">TechStore</span>
				</Link>
			<OrderTabs/>
		</header>
	);
};

export default OrderHeader;