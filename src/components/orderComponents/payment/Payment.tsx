import React, {EventHandler, FC, useState} from 'react';
import {useForm} from "react-hook-form";
import "./payment.css";
import CardImage from "./cardImage/CardImage";

const Payment: FC = () => {
	const [cardValue, setCardValue] = useState('');
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
	const onChange = (e: any) => {
		const inputValue: string = e.target.value;
		const correctValue = inputValue.split('')
			.map((letter, index) => (index + 1) % 4 === 0 ? letter + ' ' : letter)
			.join('')
			.slice(0, 20);
		setCardValue(correctValue);
	};
	const onSubmit = handleSubmit(data => {
		reset();
	});
	return (
		<div className="order__payment">
			<CardImage cardValue={cardValue}/>
			<form className="payment-form" onSubmit={onSubmit}>
				<label className="payment-form__label">
					Номер карты:
					<input className="payment-form__input"
						   autoComplete="off"
						   {...register('cardNumber', {
							   required: 'Поле обязательно для заполнения',
							   minLength: {
								   value: 16,
								   message: 'Введите 16 цифр'
							   },
							   maxLength: {
								   value: 16,
								   message: 'Введите 16 цифр'
							   },
							   onChange: (e) => {
								   onChange(e);
							   },
							   // value: cardValue
						   })
						   }
					/>
					{errors?.cardNumber &&
						<p className="payment-form__error">{errors?.cardNumber?.message || 'Ошибка'}</p>}
				</label>
				<input className="order-form__submit" type="submit" disabled={!isValid}/>
			</form>
		</div>
	);
};

export default Payment;