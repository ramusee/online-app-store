import React, {FC} from 'react';
import ProductList from "../../components/productList/ProductList";
import './home.css'

const Home: FC = () => {
	return (
		<section className="home">
				<ProductList />
		</section>
	);
};

export default Home;