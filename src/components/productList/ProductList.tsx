import React, {FC} from 'react';
import ProductItem from "./productItem/ProductItem";
import './productList.css';
import {useAppSelector} from "../../store/hooks/hooksRedux";

const ProductList: FC = () => {
	const {all} = useAppSelector(state => state.productReducer);

	return (
		<ul className="product-list">
			{all?.map(item => (
				<ProductItem key={item.id}
							 id={item.id}
							 brand={item.brand}
							 category={item.category}
							 title={item.title}
							 price={item.price}
							 img={item.img}
				/>
			))}
		</ul>
	);
};

export default ProductList;