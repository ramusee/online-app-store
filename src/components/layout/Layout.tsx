import React, {FC} from 'react';
import Header from "../header/Header";
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
	return (
		<>
			<Header/>
			<main>
				<Outlet/>
			</main>
		</>
	);
};

export default Layout;