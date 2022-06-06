import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import './searchBar.css';
import {useAppDispatch} from "../../../store/hooks/hooksRedux";
import {mainSlice} from "../../../store/reducers/mainSlice";

const SearchBar: FC = () => {
	const {
		register,
		handleSubmit,
		formState: {
		errors
	}, reset} = useForm();
	const {setSearch, setCurrentPage} = mainSlice.actions
	const dispatch = useAppDispatch()

	const onSubmit = handleSubmit(data => {
		reset();
		dispatch(setSearch(data.search))
		dispatch(setCurrentPage(1))
	});

	return (
		<form className="search-bar" onSubmit={onSubmit}>
			<input {...register('search', {
				required: 'введите значение',
				minLength: {
					value: 2,
					message: 'минимум 2 символа'
				},
			})}
				   type="text"
				   className="search-bar__input"
				   placeholder="Поиск товара"
				   autoComplete="off"
			/>
			<input className="search-bar__button" type="submit" value=""/>
			{errors?.search && <span className="search__error">{errors?.search?.message || 'Ошибка'}</span>}
		</form>
	);
};

export default SearchBar;