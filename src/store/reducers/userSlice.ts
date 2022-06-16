import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserCardState, IUserData, IUserState} from "../../models/interfaces";

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
		setDefaultUserData: (state) => {
			state.userData.firstName = '';
			state.userData.lastName = '';
			state.userData.telNumber = null;
			state.userData.email = '';
		}
	}
});

export default userSlice.reducer;
