import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import './delivery.css';
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
import {userSlice} from "../../../store/reducers/userSlice";
import Total from "../total/Total";
import {upperLetter} from "../../../helpers/upperLetter";

const Delivery: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: {
			errors,
			isValid,
		},
	} = useForm({
		mode: "onBlur"
	});
	const {setUserAddress} = userSlice.actions;
	const {delivery, card, userData} = useAppSelector(state => state.userReducer);
	const dispatch = useAppDispatch();

	const onSubmit = handleSubmit(data => {
		const delivery = {
			country: upperLetter(data.countryName),
			city: upperLetter(data.cityName),
			address: upperLetter(data.address),
		};
		dispatch(setUserAddress(delivery));
		reset();
	});
	return (<>
			{!delivery.address && <div className="delivery">
				<form className="payment-form"
					  onSubmit={onSubmit}
				>
					<legend className="order-form__title">Укажите адрес доставки</legend>
					<label className="payment-form__label">
						Страна:
						<input className="payment-form__input"
							   type="text"
							   autoComplete="off"
							   {...register('countryName', {
								   required: 'Поле обязательно для заполнения',
								   minLength: {
									   value: 3,
									   message: 'Минимум 3 символа'
								   }
							   })}
						/>
						{errors?.countryName &&
							<p className="payment-form__error">{errors?.countryName?.message || 'Ошибка'}</p>}
					</label>
					<label className="payment-form__label">
						Город:
						<input className="payment-form__input"
							   type="text"
							   autoComplete="off"
							   {...register('cityName', {
								   required: 'Поле обязательно для заполнения',
								   minLength: {
									   value: 3,
									   message: 'Минимум 3 символа'
								   }
							   })}
						/>
						{errors?.cityName &&
							<p className="payment-form__error">{errors?.cityName?.message || 'Ошибка'}</p>}
					</label>
					<label className="payment-form__label">
						Адрес:
						<input className="payment-form__input"
							   type="text"
							   autoComplete="off"
							   {...register('address', {
								   required: 'Поле обязательно для заполнения',
								   minLength: {
									   value: 6,
									   message: 'Минимум 6 символов'
								   }
							   })}
						/>
						{errors?.address &&
							<p className="payment-form__error">{errors?.address?.message || 'Ошибка'}</p>}
					</label>
					<input type="submit"
						   className="order-form__submit"
						   value="Сохранить"
						   disabled={!isValid}
					/>
				</form>
			</div>}
			{userData.firstName && card.number && delivery.address && <Total/>}
			{!userData.firstName && delivery.address && <h1 className="order__title">Заполните данные о себе на шаге 1</h1>}
			{!card.number && delivery.address && <h1 className="order__title">Заполните данные карты на шаге 2</h1>}
		</>
	);
};

export default Delivery;