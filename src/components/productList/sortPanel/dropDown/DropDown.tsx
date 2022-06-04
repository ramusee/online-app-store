import React, {FC, useContext, useState} from 'react';
import {sortOptionsRu} from "../../../../helpers/RuHelpers/RuObjects";
import SortContext from "../../../../Contexts/Сontext";
import './dropDown.css';
import { IPropsDropDown} from "../../../../models/IProps";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooksRedux";
import {mainSlice} from "../../../../store/reducers/mainSlice";

const dropDownContentClasses = new Set(['dropdown__content']);
const optionClasses = new Set(['dropdown__item']);

const DropDown: FC<IPropsDropDown> = ({dropDownOptions}) => {
	const [isActive, setIsActive] = useState(false);
	const {limit, sort} = useAppSelector(state => state.mainReducer)
	const {setSort, setLimit, setCurrentPage} = mainSlice.actions;
	const dispatch = useAppDispatch()

	const value = useContext(SortContext);
	const isSort = dropDownOptions.length < 4;
	const optionValue = isSort ? sortOptionsRu[sort || 'discount'] : limit;

	const handleClick = (option: number | string) => {
		if (typeof option === "string") {
			dispatch(setSort(option))
			if (option !== sort) dispatch(setCurrentPage(1))
			if (option === 'priceMax') value?.setOrder('desc')
			if (option === 'priceMin') value?.setOrder('asc')
			if (option === 'discount') value?.setOrder('desc')
		} else {
			dispatch(setLimit(option))
		}
		setIsActive(false)
	}

	const itemsElem = dropDownOptions.map(option => {
			(optionValue === option) || optionValue === sortOptionsRu[option]
				? optionClasses.add('current-option')
				: optionClasses.delete('current-option');
			return (
				<div className={Array.from(optionClasses).join(' ')}
					 key={option}
					 onClick={() => {handleClick(option)}
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
				{!isSort ? `Отобразить: ${optionValue}` : optionValue}
			</button>
			<div className={Array.from(dropDownContentClasses).join(' ')}>
				{itemsElem}
			</div>
		</div>
	);
};

export default DropDown;