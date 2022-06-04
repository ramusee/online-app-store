import React, {FC, useContext, useState} from 'react';
import './sortPanel.css';
import DropDown from "./dropDown/DropDown";
import SortContext from "../Сontext";

const sortOptions = ['discount', 'priceMin', 'priceMax'];
const limitOptions = [10, 20, 50, 100]

const SortPanel: FC = () => {
	const value = useContext(SortContext);

	return (
		<div className="sort-panel">
			<div className="sort-panel__content container">
					<span className="result-counter">
						{value?.productsLength || '...'} товаров
					</span>
				<div className="dropdown__container">
					<DropDown dropDownOptions={sortOptions}/>
					<DropDown dropDownOptions={limitOptions}/>
				</div>
			</div>
		</div>
	);
};

export default SortPanel;