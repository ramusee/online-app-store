import React, {FC} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";

const App: FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Home/>}/>
					<Route path="cart" element={<Cart/>}/>
				</Route>
				<Route path="order" element={<Order/>}/>
			</Routes>
		</div>
	);
};

export default App;
