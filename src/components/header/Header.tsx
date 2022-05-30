import React, {FC} from 'react';
import logoIcon from '../../images/logo.svg';
import cartIcon from '../../images/cart.svg';
import './header.css';
import {Link} from "react-router-dom";

const Header: FC = () => {
		return (
			<header className="header">
				<div className="container">
					<div className="header__main">
						<Link to="/" className="header__logo">
							<img className="logo__image" src={logoIcon} alt="logo icon"/>
							<span className="logo__text">TechStore</span>
						</Link>
						<Link to="/cart" className="header__cart">
							<img className="cart__icon" src={cartIcon} alt="cart icon"/>
							<span className="cart__title">Корзина</span>
						</Link>
					</div>
				</div>
			</header>
		);
	}
;

export default Header;