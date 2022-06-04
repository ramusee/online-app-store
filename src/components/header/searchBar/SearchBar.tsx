import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import './searchBar.css';
import {useAppDispatch} from "../../../store/hooks/hooksRedux";
import {mainSlice} from "../../../store/reducers/mainSlice";

const SearchBar: FC = () => {
	const {register, handleSubmit, reset} = useForm();
	const {setSearch, setCurrentPage} = mainSlice.actions
	const dispatch = useAppDispatch()

	const onSubmit = handleSubmit(data => {
		if(!data.search) return
		reset();
		dispatch(setSearch(data.search))
		dispatch(setCurrentPage(1))
	});

	return (
		<form className="search-bar" onSubmit={onSubmit}>
			<input {...register('search', {
				minLength: 3,
			})}
				   type="text"
				   className="search-bar__input"
				   placeholder="Поиск товара"
				   autoComplete="off"
			/>
			<input className="search-bar__button" type="submit" value=""/>
		</form>
	);
};

export default SearchBar;