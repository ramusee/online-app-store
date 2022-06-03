import React, {FC, useState} from 'react';
import ProductItem from "./productItem/ProductItem";
import './productList.css';
import {useFetchAllProductsQuery} from "../../services/productService";
import SortPanel from "./sortPanel/SortPanel";
import SortContext from "./Сontext";
import {IContextSortPanel} from "../../interfaces/IProps";

const ProductList: FC = () => {
	const [limit, setLimit] = useState(30);
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState('discount');
	const {data: products, error, isLoading} = useFetchAllProductsQuery({limit, page});

	const productsLength = products?.length
	const contextValue: IContextSortPanel = {
		sort,
		onSetLimit:setLimit,
		onSetPage:setPage,
		onSetSort:setSort,
		productsLength
	}

	return (<>
			<SortContext.Provider value={contextValue}>
				<SortPanel/>
			</SortContext.Provider>
			<div className="container">
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
			</div>
		</>
	);
};

export default ProductList;