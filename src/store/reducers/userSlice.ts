import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDelivery, IUserCardState, IUserData, IUserState} from "../../models/interfaces";

const initialState: IUserState = {
	userData: {
		firstName: '',
		lastName: '',
		telNumber: null,
		email: '',
	},
	card: {
		number: null,
		holder: '',
		expiration: {
			month: null,
			year: null,
		},
		cvv: null,
	},
	delivery: {
		country: '',
		city: '',
		address: '',
	}
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<IUserData>) => {
			state.userData.firstName = action.payload.firstName;
			state.userData.lastName = action.payload.lastName;
			state.userData.telNumber = action.payload.telNumber;
			state.userData.email = action.payload.email;
		},
		setUserCard: (state, action: PayloadAction<IUserCardState>) => {
			state.card.number = action.payload.number;
			state.card.holder = action.payload.holder;
			state.card.cvv = action.payload.cvv;
			state.card.expiration.month = action.payload.expiration.month;
			state.card.expiration.year = action.payload.expiration.year;
		},
		setUserAddress: (state, action: PayloadAction<IDelivery>) => {
			state.delivery.country = action.payload.country;
			state.delivery.city = action.payload.city;
			state.delivery.address = action.payload.address;
		},
		setDefaultUserData: (state) => {
			state.userData.firstName = '';
			state.userData.lastName = '';
			state.userData.telNumber = null;
			state.userData.email = '';
		},
		setDefaultCard: (state) => {
			state.card.number = null;
			state.card.holder = '';
			state.card.cvv = null;
			state.card.expiration.month = null;
			state.card.expiration.year = null;

		},
		setDefaultAddress: (state) => {
			state.delivery.address = '';
			state.delivery.city = '';
			state.delivery.country = '';
		}
	}
});

export default userSlice.reducer;
