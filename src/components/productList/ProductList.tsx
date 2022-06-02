import React, {FC, useState} from 'react';
import ProductItem from "./productItem/ProductItem";
import './productList.css';
import {useAppSelector} from "../../store/hooks/hooksRedux";
import {productAPI} from "../../services/productService";

const ProductList: FC = () => {
	const [limit, setLimit] = useState(20);
	const {all} = useAppSelector(state => state.mainReducer);


	const {data: products, error, isLoading} = productAPI.useFetchAllProductsQuery(limit);

	return (
		<div className="product-list">
			{isLoading && <h2 className="product-list__message">Загрузка...</h2>}
			{error && <h2 className="product-list__message">Не удалось загрузить товары</h2>}
			{products && <ul>{products.map(item => (
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
			}
		</div>
	);
};

export default ProductList;