import React, {FC} from 'react';
import './productItem.css';
import {IProduct} from "../../../models/interfaces";
import {categoryRu} from "../../../helpers/RuHelpers/RuObjects";

const ProductItem: FC<IProduct> = ({
									   id,
									   title,
									   brand,
									   category,
									   price,
									   img,
									   discount
								   }) => {
	return (
		<li className="product__item">
			<div className="product__left-container">
				<div className="product__image-container">
					<img className="product__image"
						 src={img}
						 alt="product image"/>
				</div>
				<div className="product__desc">
					<span className="product__title">{title}</span>
					<span className="product__category">Тип: {categoryRu[category]}</span>
					<span className="product__brand">Бренд: {brand}</span>
					<span className="product__article">Article: {id + 1}</span>
				</div>
			</div>
			<div className="product__right-container">
				<div className="product__price-container">
					<span className="product__price">{Math.round(price - (price / 100 * discount))} ₽</span>
					{!!discount && <span className="product__price_prev">
					{Math.round(price)} ₽</span>}
					{!!discount  && <span className="product__discount">−{discount}%</span>}
				</div>
				<button className="product__add-btn">В корзину</button>
			</div>
		</li>
	);
};

export default ProductItem;