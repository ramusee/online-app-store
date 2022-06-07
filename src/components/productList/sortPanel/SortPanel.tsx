import React, {FC, useContext} from 'react';
import './sortPanel.css';
import DropDown from "./dropDown/DropDown";
import SortContext from "../../../contexts/Сontext";
import {useAppSelector} from "../../../store/hooks/hooksRedux";

const sortOptions = ['discount', 'priceMin', 'priceMax'];
const limitOptions = [10, 20, 50, 75]

const SortPanel: FC = () => {
	const value = useContext(SortContext);
	const {search} = useAppSelector(state=> state.mainReducer)
	return (
		<div className="sort-panel">
			<div className="sort-panel__content wrapper">
					<span className="result-counter">
						{search ? `"${search}"` : ''}
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