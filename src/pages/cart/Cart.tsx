import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import CartItem from "../../components/cartComponents/cartItem/CartItem";
import './cart.css';
import {mainSlice} from "../../store/reducers/mainSlice";
import CartCalculator from "../../components/cartComponents/cartCalculator/CartCalculator";
import {Link} from "react-router-dom";

const Cart: FC = () => {
	const {cartProducts} = useAppSelector(state => state.mainReducer.cart);
	const {userData, card, delivery} = useAppSelector(state => state.userReducer);
	const {setCurrentOrderTab} = mainSlice.actions
	const isFullData = userData.firstName && card.number && delivery.address;
	const {clearCart} = mainSlice.actions;
	const dispatch = useAppDispatch();
	return (
		<div className="cart wrapper">
			{!!cartProducts.length && <h1 className="cart__title">Корзина</h1>}
			{!!cartProducts.length && <button className="cart__clear-btn"
											  onClick={() => dispatch(clearCart())}>Очистить корзину</button>}
			{!!cartProducts.length && isFullData && <Link className="cart__change-data-btn" to="/order">Изменить персональные данные</Link>}

			{!!cartProducts.length && <div className="cart__container">
			  <ul className="cart__list">
				  {cartProducts.map(product => <CartItem key={product.id}
														 id={product.id}
														 title={product.title}
														 price={product.price}
														 discount={product.discount}
														 img={product.img}
														 count={product.count}
				  />)}
			  </ul>
			  <CartCalculator cartProducts={cartProducts}/>
			</div>
			}
			{!cartProducts.length && <div className="cart__empty">
			  <h1 className="cart__empty_title">Корзина пуста</h1>
			  <p className="cart__empty_text">Воспользуйтесь поиском и фильтрами, чтобы найти все, что нужно.</p>
			</div>}
		</div>
	);
};

export default Cart;