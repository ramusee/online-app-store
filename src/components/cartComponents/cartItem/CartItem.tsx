import React, {FC} from 'react';
import CountChanger from "../../productList/productItem/countChanger/CountChanger";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
import './cartItem.css'
import {IPropsCartItem} from "../../../models/IProps";
import {mainSlice} from "../../../store/reducers/mainSlice";

const CartItem: FC<IPropsCartItem> = ({
										  id,
										  title,
										  img,
										  discount,
										  price,
										  count
									  }) => {
	const {deleteCartProduct} = mainSlice.actions
	const dispatch = useAppDispatch()
	const priceAllWithDiscount = Math.round(price - (price / 100 * discount)) * count
	const priceAllPrev = Math.round(price * count)
	const discountInRub = priceAllPrev - priceAllWithDiscount

	return (
		<li className="cart__item">
			<div className="product__left-container">
				<div className="item__image-container">
					<img className="item__image"
						 src={img}
						 alt="product image"/>
				</div>
				<div className="item__options">
					<span className="item__title">{title}</span>
					<button className="item__delete-btn"
							onClick={()=> dispatch(deleteCartProduct(id))}
					>Удалить</button>
				</div>
			</div>
			<div className="item__right-container">
				<div className="product__price-container">
					<span className="product__price">{priceAllWithDiscount} ₽</span>
					{!!discount && <span className="product__price_prev">
					{priceAllPrev} ₽</span>}
					{!!discount && <span className="product__discount">−{discount}%</span>}
				</div>
				{!!discount && <span className="cart__discount-rub">Скидка {discountInRub}₽</span>}
				{<CountChanger id={id}/>}
			</div>

		</li>
	);
};

export default CartItem;