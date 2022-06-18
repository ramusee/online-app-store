import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {userSlice} from "../../../store/reducers/userSlice";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
import {IUserData, IUserState} from "../../../models/interfaces";
import {mainSlice} from "../../../store/reducers/mainSlice";
import "./userForm.css"
import {upperLetter} from "../../../helpers/upperLetter";

const UserForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
		}, reset
	} = useForm({
		mode: "onBlur",
	});
	const {setCurrentOrderTab} = mainSlice.actions
	const {setUserData} = userSlice.actions
	const dispatch = useAppDispatch()


	const onSubmit = handleSubmit((data) => {
		const userData:IUserData = {
			firstName: upperLetter(data.firstName),
			lastName: upperLetter(data.lastName),
			telNumber: data.telNumber,
			email: data.email.toLowerCase(),
		}
		dispatch(setUserData(userData))
		dispatch(setCurrentOrderTab(2))
		reset();
	});
	return (
		<form className="order-form" onSubmit={onSubmit}>
			<legend className="order-form__title">Заполните данные о себе</legend>
			<label className="order-form__label">
				Имя:
				<input className="order-form__input"
					   autoComplete={"off"}
					   {...register("firstName", {
						   required: "Поле обязательно для заполнения",
						   minLength: {
							   value: 2,
							   message: "Минимум 2 символа"
						   },
					   })}
				/>
				{errors?.firstName && <p className="order-form__error">{errors?.firstName?.message || 'Ошибка'}</p>}
			</label>
			<label className="order-form__label">
				Фамилия:
				<input className="order-form__input"
					   autoComplete={"off"}
					   {...register("lastName", {
						   required: "Поле обязательно для заполнения",
						   minLength: {
							   value: 2,
							   message: "Минимум 2 символа"
						   },
					   })}
				/>
				{errors?.lastName && <p className="order-form__error">{errors?.lastName?.message || 'Ошибка'}</p>}
			</label>
			<label className="order-form__label">
				Номер телефона: +7...
				<input className="order-form__input"
					   type="number"
					   autoComplete={"off"}
					   {...register("telNumber", {
						   required: "Поле обязательно для заполнения",
						   pattern: {
							   value: /\d{10}/,
							   message: "Введите 10 цифр"
						   },
						   minLength: {
							   value: 10,
							   message: "Введите 10 цифр"
						   },
						   maxLength: {
							   value: 10,
							   message: "Введите 10 цифр"
						   },
					   })}
				/>
				{errors?.telNumber && <p className="order-form__error">{errors?.telNumber?.message || 'Ошибка'}</p>}
			</label>
			<label className="order-form__label">
				Email:
				<input className="order-form__input"
					   type="email"
					   autoComplete={"off"}
					   {...register("email", {
						   required: "Поле обязательно для заполнения",
						   minLength: {
							   value: 5,
							   message: "Минимум 5 символов"
						   },
					   })}
				/>
				{errors?.email && <p className="order-form__error">{errors?.email?.message || 'Ошибка'}</p>}
			</label>
			<input className="order-form__submit"
				   type="submit"
				   disabled={!isValid}
				   value="Сохранить"
			/>
		</form>
	);
};

export default UserForm;