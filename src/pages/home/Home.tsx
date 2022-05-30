import React, {FC} from 'react';
import ProductItem from "../../components/productList/productItem/ProductItem";
import ProductList from "../../components/productList/ProductList";
import SortPanel from "../../components/sortPanel/SortPanel";

const Home: FC = () => {
	return (
		<section className="home">
			<SortPanel/>
			<div className="container">
				<ProductList />
			</div>
		</section>
	);
};

export default Home;