import React, {FC} from 'react';
import ProductList from "../../components/productList/ProductList";

const Home: FC = () => {
	return (
		<section className="home">
				<ProductList />
		</section>
	);
};

export default Home;