import React from 'react';
import {useForm} from "react-hook-form";

const Payment = () => {
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

	return (
		<div className="order__payment">
			<div className="payment__card"></div>
			<form>
				<input type="text"/>
			</form>
		</div>
	);
};

export default Payment;