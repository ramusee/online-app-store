import React, {FC, useState} from 'react';
import './brandsFilter.css';
import {mainSlice} from "../../../store/reducers/mainSlice";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooksRedux";


const brandItems = [
	'Acer', 'Amazfit', 'Asus', 'Canon', 'Dell', 'Echips',
	'Epson', 'HP', 'Haier', 'Horizont', 'Huawei',
	'IRBIS', 'KIVI', 'Lenovo', 'MSI', 'Poco', 'Realme', 'Samsung',
	'Skyworth', 'Tecno', 'Vivo', 'Xiaomi', 'ZTE'
];
let brandListClasses = ['filter__list'];

const BrandsFilter: FC = () => {
	const [isActive, setIsActive] = useState(false);
	const {brands} = useAppSelector(state => state.mainReducer.filters);
	const {changeBrands} = mainSlice.actions;
	const dispatch = useAppDispatch();

	isActive
		? brandListClasses.push('active-option')
		: brandListClasses = brandListClasses.filter(item => item !== 'active-option');
	return (
		<form className="filters__brands">
			<button type="button"
					className={isActive ? "option__current rotate" : "option__current"}
					onClick={() => setIsActive(!isActive)}
			>
				Брэнды
			</button>
			<div className={brandListClasses.join(' ')}>
				{brandItems.map(brand => (
						<label key={brand} className="filter__item">
							<input type="checkbox"
								   value={brand}
								   checked={brands.includes(brand)}
								   onChange={() => dispatch(changeBrands(brand))}
								   className="brand__checkbox"
							/>
							{brand}
						</label>
				))}
			</div>

		</form>
	);
};

export default BrandsFilter;