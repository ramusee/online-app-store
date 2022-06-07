import React, {FC, useState} from 'react';
import ProductItem from "./productItem/ProductItem";
import './productList.css';
import {useFetchAllProductsQuery} from "../../services/productService";
import SortPanel from "./sortPanel/SortPanel";
import SortContext from "../../contexts/Сontext";
import {IContextOptionPanel} from "../../models/IProps";
import Pagination from "./Pagination/Pagination";
import {useAppSelector} from "../../store/hooks/hooksRedux";
import Filters from "../filters/Filters";

const ProductList: FC = () => {
	const [order, setOrder] = useState('desc');
	const {search, currentPage, limit, sort, filters} = useAppSelector(state => state.mainReducer);
	const category = filters.category
	const brands = filters.brands
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
	const contextValue: IContextOptionPanel = {
		visible,
		order,
		setOrder
	};


	return (<>
			<SortContext.Provider value={contextValue}>
				<SortPanel/>
			</SortContext.Provider>
			<div className="wrapper">
					<div className="products">
						<Filters/>
						{isLoading && <h2 className="product-list__message">Загрузка...</h2>}
						{error && <h2 className="product-list__message">Не удалось загрузить товары</h2>}
						{products?.length === 0 && <h2 className="product-list__message">Не найдено</h2>}
						{products?.length !== 0 && !error && <ul className="product-list">{products?.map(item => (
							<ProductItem key={item.id}
										 id={item.id}
										 brand={item.brand}
										 category={item.category}
										 title={item.title}
										 price={item.price}
										 img={item.img}
										 discount={item.discount}
										 description={item.description}

							/>
						))}
						</ul>
						}
					</div>
				{ visible >= 10  && !isLoading && !error && <Pagination/>}
			</div>
		</>
	);
};

export default ProductList;