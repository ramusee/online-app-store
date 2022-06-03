import React, {FC, useContext} from 'react';
import {sortOptionsRu} from "../../../../RuHelpers/RuObjects";
import SortContext from "../../Сontext";
import {IPropsDropDown} from "../../../../interfaces/IProps";

const sortOptions = ['priceMin', 'priceMax', 'discount'];

const DropDown: FC<IPropsDropDown> = ({onSetIsActive}) => {
	const value = useContext(SortContext)
	const optionsElem = sortOptions.map(option => (
			<div className="options__item"
				 key={option}
				 onClick={() => {
					 value?.onSetSort(option);
					 onSetIsActive(false);
				 }
				 }
			>{sortOptionsRu[option]}
			</div>
		)
	);

	return (
		<div className="sort-panel__dropdown">
			<div className="dropdown__btn">Сортировать:</div>
			<div className="dropdown__content">
				<div className="dropdown__item"></div>
				<div className="dropdown__item"></div>
			</div>
		</div>
	);
};

export default DropDown;