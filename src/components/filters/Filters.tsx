import React, {FC} from 'react';
import './filters.css';
import CategoryFilter from "./category/CategoryFilter";
import BrandsFilter from "./brands/BrandsFilter";
import {mainSlice} from "../../store/reducers/mainSlice";
import {useAppDispatch} from "../../store/hooks/hooksRedux";


const Filters :FC = () => {
	const {setDefaultFilters} = mainSlice.actions
	const dispatch = useAppDispatch()

	return (
		<div className="filters">
			<CategoryFilter/>
			<BrandsFilter/>
			<button className="blue-btn"
				  onClick={()=> dispatch(setDefaultFilters())}
			>
				Сбросить фильтры
			</button>
		</div>
	);
};

export default Filters;