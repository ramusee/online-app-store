import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import "./payment.css";
import CardImage from "./cardImage/CardImage";
import {useAppDispatch} from "../../../store/hooks/hooks";
import {userSlice} from "../../../store/reducers/userSlice";
import {IUserCardState} from "../../../models/interfaces";
import {mainSlice} from "../../../store/reducers/mainSlice";

const Payment: FC = () => {
	const [cardValue, setCardValue] = useState('');
	const [cardHolder, setCardHolder] = useState('');
	const [cardExpirationMonth, setCardExpirationMonth] = useState('');
	const [cardExpirationYear, setCardExpirationYear] = useState('');
	const {setCurrentOrderTab} = mainSlice.actions
	const {setUserCard} = userSlice.actions;
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		reset,
		formState: {
			errors,
			isValid
		}
	} = useForm({
		mode: "onBlur"
	});
	const onChangeCardNumber = (e: any): void => {
		const inputValue: string = e.target.value;
		const correctValue = inputValue.split('')
			.map((letter, index) => (index + 1) % 4 === 0 ? letter + ' ' : letter)
			.join('')
			.slice(0, 20);
		setCardValue(correctValue);
	};
	const onChangeCardHolder = (e: any) => {
		setCardHolder(e.target.value.slice(0, 23));
	};
	const onSubmit = handleSubmit((data) => {
		const cardData: IUserCardState = {
			number: +data.cardNumber,
			holder: data.cardHolder.toUpperCase(),
			expiration: {
				month: +data.cardMonth,
				year: +data.cardYear,
			},
			cvv: +data.cardCVV
		};
		dispatch(setUserCard(cardData));
		dispatch(setCurrentOrderTab(3))
		reset();
	});
	return (
		<div className="order__payment">
			<CardImage cardValue={cardValue}
					   cardHolder={cardHolder}
					   cardExpirationMonth={cardExpirationMonth}
					   cardExpirationYear={cardExpirationYear}/>
			<form className="payment-form" onSubmit={onSubmit}>
				<label className="payment-form__label">
					Номер карты:
					<input className="payment-form__input"
						   autoComplete="off"
						   type="number"
						   {...register('cardNumber', {
							   required: 'Поле обязательно для заполнения',
							   pattern: {
								   value: /\d{16}/,
								   message: 'Только цифры'
							   },
							   minLength: {
								   value: 16,
								   message: 'Введите 16 цифр'
							   },
							   maxLength: {
								   value: 16,
								   message: 'Введите 16 цифр'
							   },
							   onChange: onChangeCardNumber,
						   })
						   }
					/>
					{errors?.cardNumber &&
						<p className="payment-form__error">{errors?.cardNumber?.message || 'Ошибка'}</p>}
				</label>
				<label className="payment-form__label">
					Держатель карты:
					<input className="payment-form__input"
						   autoComplete="off"
						   {...register('cardHolder', {
							   required: 'Поле обязательно для заполнения',
							   minLength: {
								   value: 2,
								   message: 'Минимум 2 символа'
							   },
							   maxLength: {
								   value: 25,
								   message: 'Максимум 23 символa'
							   },
							   onChange: onChangeCardHolder
							   ,
						   })
						   }
					/>
					{errors?.cardHolder &&
						<p className="payment-form__error">{errors?.cardHolder?.message || 'Ошибка'}</p>}
				</label>
				<div className="bottom-container">
					<label className="payment-form__label payment-form__label_select">
						Действует до :
						<div className="select-container">
							<select className="payment-form__select"
									{...register('cardMonth', {
										required: true,
										onChange: (e) => setCardExpirationMonth(e.target.value),
										value: "Month"
									})}>
								<option className="payment-form__option" value="Month" disabled={true}>Месяц
								</option>
								<option value="01">01</option>
								<option value="02">02</option>
								<option value="03">03</option>
								<option value="04">04</option>
								<option value="05">05</option>
								<option value="06">06</option>
								<option value="07">07</option>
								<option value="08">08</option>
								<option value="09">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
							<select className="payment-form__select" {...register('cardYear',
								{
									required: true,
									onChange: e => setCardExpirationYear(e.target.value),
									value: "Year"
								})}>
								<option className="payment-form__option" value="Year" disabled={true}>Год
								</option>
								<option value="2022">2022</option>
								<option value="2023">2023</option>
								<option value="2024">2024</option>
								<option value="2025">2025</option>
								<option value="2026">2026</option>
								<option value="2027">2027</option>
								<option value="2028">2028</option>
								<option value="2029">2029</option>
								<option value="2030">2030</option>
								<option value="2031">2031</option>
								<option value="2032">2032</option>
								<option value="2033">2033</option>
							</select>
						</div>
					</label>
					<label className="payment-form__label">
						CVV/CVC:
						<input className="payment-form__input" type="number" {...register("cardCVV", {
							required: "Поле обязательно для заполнения",
							maxLength: {
								value: 4,
								message: "Максимум 4 символа"
							}
						})
						}/>
						{errors?.cardCVV &&
							<p className="payment-form__error">{errors?.cardCVV?.message || 'Ошибка'}</p>}
					</label>
				</div>
				<input className="order-form__submit" type="submit" disabled={!isValid}/>
			</form>
		</div>
	);
};

export default Payment;