import React, {FC, useContext, useState} from 'react';
import {sortOptionsRu} from "../../../../RuHelpers/RuObjects";
import SortContext from "../../Сontext";
import './dropDown.css';
import {IContextOptionPanel} from "../../../../models/IProps";

interface IPropsDropDown {
	dropDownOptions: string[] | number[];
}

const dropDownContentClasses = new Set(['dropdown__content']);
const optionClasses = new Set(['dropdown__item']);

const DropDown: FC<IPropsDropDown> = ({dropDownOptions}) => {
	const [isActive, setIsActive] = useState(false);

	const value: IContextOptionPanel = useContext(SortContext);
	const sort: string = value?.sort;
	const limit: number = value?.limit;
	const isSort = dropDownOptions.length < 4;
	const optionValue = isSort ? sortOptionsRu[sort] : limit;

	const itemsElem = dropDownOptions.map(option => {
			(optionValue === option) || optionValue === sortOptionsRu[option]
				? optionClasses.add('current-option')
				: optionClasses.delete('current-option');
			return (
				<div className={Array.from(optionClasses).join(' ')}
					 key={option}
					 onClick={() => {
						 typeof option === "string" ? value?.onSetSort(option) : value?.onSetLimit(option);
						 setIsActive(false);
					 }
					 }
				>{isSort ? sortOptionsRu[option] : option}
				</div>
			);
		}
	);

	isActive
		? dropDownContentClasses.add('active-sort')
		: dropDownContentClasses.delete('active-sort');

	return (
		<div className="sort-panel__dropdown">
			<button onClick={() => setIsActive(!isActive)} className="dropdown__btn">
				{optionValue}
			</button>
			<div onBlur={()=> setIsActive(false)} className={Array.from(dropDownContentClasses).join(' ')}>
				{itemsElem}
			</div>
		</div>
	);
};

export default DropDown;