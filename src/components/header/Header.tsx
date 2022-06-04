import React, {FC} from 'react';
import logoIcon from '../../images/logo.svg';
import cartIcon from '../../images/cart.svg';
import './header.css';
import {Link} from "react-router-dom";
import SearchBar from "./searchBar/SearchBar";

const Header: FC = () => {
		return (
			<header className="header">
					<div className="header__main wrapper">
						<Link to="/" className="header__logo">
							<img className="logo__image" src={logoIcon} alt="logo icon"/>
							<span className="logo__text">TechStore</span>
						</Link>
						<SearchBar/>
						<Link to="/cart" className="header__cart">
							<img className="cart__icon" src={cartIcon} alt="cart icon"/>
						</Link>
					</div>
			</header>
		);
	}
;

export default Header;