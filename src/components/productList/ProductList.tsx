import React, {FC} from 'react';
import ProductItem from "./productItem/ProductItem";
import './productList.css'
const ProductList: FC = () => {
	return (
		<ul className="product-list">
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
		</ul>
	);
};

export default ProductList;