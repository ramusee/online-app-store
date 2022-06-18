import React, {FC, useState} from 'react';
import {sortOptionsRu} from "../../../../helpers/RuHelpers/RuObjects";
import './dropDown.css';
import {IPropsDropDown} from "../../../../models/IProps";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {mainSlice} from "../../../../store/reducers/mainSlice";
import useOnclickOutside from "react-cool-onclickoutside";

let dropDownContentClasses = ['dropdown__content'];
let optionClasses = ['dropdown__item'];

const DropDown: FC<IPropsDropDown> = ({dropDownOptions}) => {
	const [isActive, setIsActive] = useState(false);
	const {limit, sort} = useAppSelector(state => state.mainReducer.sorting)
	const {setSort, setLimit, setCurrentPage, setOrder} = mainSlice.actions;
	const dispatch = useAppDispatch()
	const ref = useOnclickOutside(() => {
		setIsActive(false);
	});
	const isSort = dropDownOptions.length < 4;
	const optionValue = isSort ? sortOptionsRu[sort || 'discount'] : limit;

	const handleClick = (option: number | string) => {
		if (typeof option === "string") {
			dispatch(setSort(option))
			if (option !== sort) dispatch(setCurrentPage(1))
			if (option === 'priceMax') dispatch(setOrder('desc'))
			if (option === 'priceMin') dispatch(setOrder('asc'))
			if (option === 'discount') dispatch(setOrder('desc'))
		} else {
			dispatch(setLimit(option))
		}
		setIsActive(false)
	}

	const itemsElem = dropDownOptions.map(option => {
			(optionValue === option) || optionValue === sortOptionsRu[option]
				? optionClasses.push('current-option')
				: optionClasses = optionClasses.filter(item => item !== 'current-option');
			return (
				<div className={Array.from(optionClasses).join(' ')}
					 key={option}
					 onClick={() => {handleClick(option)}
					 }
				>
					{isSort ? sortOptionsRu[option] : option}
				</div>
			);
		}
	);

	isActive
		? dropDownContentClasses.push('active-option')
		: dropDownContentClasses = dropDownContentClasses.filter(item => item !=='active-option');

	return (
		<div className="sort-panel__dropdown">
			<button onClick={() => setIsActive(!isActive)}
					className={isActive ? "option__current rotate" : "option__current"}>
				{!isSort ? `Отобразить: ${optionValue}` : optionValue}
			</button>
			<div className={dropDownContentClasses.join(' ')}
				 ref={ref}
			>
				{itemsElem}
			</div>
		</div>
	);
};

export default DropDown;