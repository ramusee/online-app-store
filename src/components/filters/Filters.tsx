import React, {useState} from 'react';
import './filters.css';
import {useForm} from "react-hook-form";
import {categoryRu, sortOptionsRu} from "../../helpers/RuHelpers/RuObjects";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooksRedux";
import {mainSlice} from "../../store/reducers/mainSlice";

const categoryItems = ['all', 'Laptop', 'Smartphone', 'TV', 'Monoblock', 'Printer', 'SmartWatch', 'Tablet'];
const brandItems = [];

const categoryClasses = new Set(['category__list']);
const categoryItemClasses = new Set(['category__item']);

const Filters = () => {
	const [isActive, setIsActive] = useState(false);
	const {filters} = useAppSelector(state => state.mainReducer);
	const {setCategory} = mainSlice.actions;
	const dispatch = useAppDispatch();

	const currentCategory = filters.category;
	const brands = filters.brands;
	const {register, reset} = useForm();
	isActive
		? categoryClasses.add('active-category')
		: categoryClasses.delete('active-category');

	return (
		<div className="filters">
			<div className="filters__category">
				<button className="category__current"
						onClick={() => setIsActive(!isActive)}
				>
					Категория: {categoryRu[currentCategory]}
				</button>
				<ul className={Array.from(categoryClasses).join(' ')}>
					{categoryItems.map(item => {
						currentCategory === item
							? categoryItemClasses.add('current-option')
							: categoryItemClasses.delete('current-option')
							return (<li key={item}
										className={Array.from(categoryItemClasses).join(' ')}
										onClick={() => {
											dispatch(setCategory(item));
											setIsActive(false);
										}}
							>{categoryRu[item]}
							</li>);
						}
					)}
				</ul>
			</div>
			<form>
			</form>
		</div>
	);
};

export default Filters;