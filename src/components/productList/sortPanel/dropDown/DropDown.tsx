import React, {FC, useContext, useState} from 'react';
import {sortOptionsRu} from "../../../../RuHelpers/RuObjects";
import SortContext from "../../Сontext";
import './dropDown.css';

const sortOptions = ['discount', 'priceMin', 'priceMax'];
const dropDownContentClasses = new Set(['dropdown__content']);

const DropDown: FC = () => {
	const [isActive, setIsActive] = useState(false);
	const value = useContext(SortContext);
	const sort = value ? value.sort : 'discount';
	const dropDownItems = sortOptions.map(option => (
			<div className="dropdown__item"
				 key={option}
				 onClick={() => {
					 value?.onSetSort(option)
					 setIsActive(false)
				 	}
				 }
			>{sortOptionsRu[option]}
			</div>
		)
	);
	isActive
		? dropDownContentClasses.add('active-sort')
		: dropDownContentClasses.delete('active-sort');
	return (
		<div className="sort-panel__dropdown">
			<button onClick={()=> setIsActive(!isActive)} className="dropdown__btn">
				{sortOptionsRu[sort]}
			</button>
			<div className={Array.from(dropDownContentClasses).join(' ')}>
				{dropDownItems}
			</div>
		</div>
	);
};

export default DropDown;