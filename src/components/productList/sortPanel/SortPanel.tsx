import React, {FC, useContext, useState} from 'react';
import './sortPanel.css';
import DropDown from "./dropDown/DropDown";
import SortContext from "../Сontext";

const SortPanel: FC = () => {
	const value = useContext(SortContext);

	return (
		<div className="sort-panel">
			<div className="sort-panel__content container">
					<span className="result-counter">
					Найдено: {value?.productsLength || '...'} товаров
					</span>
				<DropDown />
				<DropDown />
			</div>
		</div>
	);
};

export default SortPanel;