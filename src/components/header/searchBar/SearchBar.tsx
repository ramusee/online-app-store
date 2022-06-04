import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import './searchBar.css';

const SearchBar: FC = () => {
	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
		reset
	} = useForm();

	const onSubmit = handleSubmit(data => {
		reset();
	});

	return (
		<form className="search-bar" onSubmit={onSubmit}>
			<input {...register('search', {
				minLength: 3,
			})}
				   type="text"
				   className="search-bar__input"
				   placeholder="Поиск товара"/>
			<input className="search-bar__button" type="submit" value=""/>
		</form>
	);
};

export default SearchBar;