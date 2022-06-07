import React, {FC, useState} from 'react';
import './productItem.css';
import {IProduct} from "../../../models/interfaces";
import {categoryRu} from "../../../helpers/RuHelpers/RuObjects";
import {mainSlice} from "../../../store/reducers/mainSlice";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooksRedux";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import CountChanger from "./countChanger/CountChanger";

const ProductItem: FC<IProduct> = ({
									   id,
									   title,
									   brand,
									   category,
									   price,
									   img,
									   discount,
									   description,
									   item
								   }) => {
	const [isOpenDesc, setIsOpenDesc] = useState(false);
	const [isActiveCartBtn, setIsActiveCartBtn] = useState(false);

	const {addCartProducts} = mainSlice.actions;
	const {cartProducts} = useAppSelector(state => state.mainReducer.cart);
	const dispatch = useAppDispatch();

	const productDescription = Object.entries(description).map(([key, value]) => {
		return <div key={key} className={isOpenDesc ? "product__desc desc-open" : "product__desc"}>
			{key}{value}
		</div>;
	});
	const handleCartBtn = (item: IProduct) => {
		setIsActiveCartBtn(!isActiveCartBtn);
		if (!cartProducts.includes(item)) {
			dispatch(addCartProducts(item));
		}
	};
	return (
		<li className="product__item">
			<div className="product__left-container">
				<div className="product__image-container">
					<img className="product__image"
						 src={img}
						 alt="product image"/>
				</div>
				<div className="product__options">
					<span className="product__title">{title}</span>
					<span className="product__category">Тип: {categoryRu[category]}</span>
					<span className="product__brand">Бренд: {brand}</span>
					<button onClick={() => setIsOpenDesc(!isOpenDesc)}
							className={!isOpenDesc ? "product__desc_btn" : "product__desc_btn rotate"}
					>
						Характеристики:
					</button>
					{isOpenDesc && productDescription}
					<span className="product__article">Article: {id + 1}</span>
				</div>
			</div>
			<div className="product__right-container">
				<div className="product__price-container">
					<span className="product__price">{Math.round(price - (price / 100 * discount))} ₽</span>
					{!!discount && <span className="product__price_prev">
					{Math.round(price)} ₽</span>}
					{!!discount && <span className="product__discount">−{discount}%</span>}
				</div>
				{!isActiveCartBtn && <button className="blue-btn"
											 onClick={() => {handleCartBtn(item)}}
				>В корзину</button>}
				{isActiveCartBtn && <CountChanger id={id}/>}
			</div>
		</li>
	);
};

export default ProductItem;