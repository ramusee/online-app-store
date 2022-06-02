import React, {FC} from 'react';
import './productItem.css';
import {IProduct} from "../../../interfaces/interfaces";
import {ICategoryRu} from "../../../interfaces/interfaces";

const categoryRu: ICategoryRu = {
	Laptop: 'Ноутбук',
	Smartphone: 'Смартфон',
	TV: 'Телевизор',
	Monoblock: 'Моноблок',
	Printer: 'Принтер',
	SmartWatch: 'Умные часы',
	Tablet: 'Планшет',
}

const ProductItem: FC<IProduct> = ({
									   id,
									   title,
									   brand,
									   category,
									   price,
									   img
								   }) => {
	return (
		<li className="product__item">
			<div className="product__image-container">
			<img className="product__image"
				 src={img}
				 alt="product image"/>
			</div>
			<div className="product__desc">
				<span className="product__title">{title}</span>
				<span className="product__category">Тип: {categoryRu[category]}</span>
				<span className="product__brand">Бренд: {brand}</span>
				<span className="product__price">${price}</span>
				<button className="product__add-btn">В корзину</button>
				<span className="product__article">Article: {id+1}</span>
			</div>
		</li>
	);
};

export default ProductItem;