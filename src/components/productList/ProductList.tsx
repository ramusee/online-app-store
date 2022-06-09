import React, {FC, useState} from 'react';
import ProductItem from "./productItem/ProductItem";
import './productList.css';
import {useFetchAllProductsQuery} from "../../services/productService";
import SortPanel from "./sortPanel/SortPanel";
import Pagination from "./Pagination/Pagination";
import {useAppSelector} from "../../store/hooks/hooks";
import Filters from "../filters/Filters";

const ProductList: FC = () => {
	const {search, filters} = useAppSelector(state => state.mainReducer);
	const {currentPage, limit, sort, order} = useAppSelector(state => state.mainReducer.sorting);
	const category = filters.category;
	const brands = filters.brands;
	const {data: products, error, isLoading} = useFetchAllProductsQuery({
		search,
		limit,
		currentPage,
		sort,
		order,
		category,
		brands
	});
	const visible: any = products?.length;

	return (<>
			<SortPanel/>
			<div className="wrapper">
				<div className="products">
					<Filters/>
					{isLoading && <h2 className="product-list__message">Загрузка...</h2>}
					{error && <h2 className="product-list__message">Не удалось загрузить товары</h2>}
					{!products?.length && !isLoading && <h2 className="product-list__message">Не найдено</h2>}
					{products?.length && !error && <ul className="product-list">{products?.map(item => (
						<ProductItem item={item}
									 key={item.id}
									 id={item.id}
									 brand={item.brand}
									 category={item.category}
									 title={item.title}
									 price={item.price}
									 img={item.img}
									 discount={item.discount}
									 description={item.description}
									 count={item.count}
						/>
					))}
					</ul>
					}
				</div>
				{visible >= 10 && !isLoading && !error && <Pagination/>}
			</div>
		</>
	);
};

export default ProductList;