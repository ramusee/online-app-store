import React, {FC} from 'react';
import {useForm} from "react-hook-form";

const SearchBar: FC = () => {
	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
		reset
	} = useForm({mode: "onBlur"});

	const onSubmit = handleSubmit(data => {
		console.log(data);
		reset();
	});

	return (
		<form onSubmit={onSubmit}>
			<input {...register('search', {
				required: 'Поле обязательно для заполнения',
				minLength: {
					value: 3,
					message: 'Минимум 3 символа'
				}
			})}
				   type="text"
				   placeholder="Поиск товара"/>
			<input type="submit"/>
			<div>{errors?.search && <p>{errors?.search?.message || 'Error'}</p>}</div>
		</form>
	);
};

export default SearchBar;