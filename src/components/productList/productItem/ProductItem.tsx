import React, {FC} from 'react';
import './productItem.css';

const ProductItem: FC = () => {
	return (
		<li className="product__item">
			<img className="product__image" src="https://cdn1.ozone.ru/s3/multimedia-l/wc250/6260084541.jpg"
				 alt="product image"/>
			<div className="product__desc">
				<span className="product__title">11.6" Ноутбук Asus L210MA-GJ243T, Intel Celeron N4020 (1.1 ГГц),
					RAM 4 ГБ, eMMC 128 ГБ, Intel UHD Graphics 600, Windows Home, (90NB0R41-M09020), синий</span>
				<span className="product__category">Ноутбуки</span>
				<span className="product__brand">Asus</span>
				<span className="product__price">$983.7</span>
				<button className="product__add-btn">Добавить в корзину</button>
			</div>
		</li>
	);
};

export default ProductItem;