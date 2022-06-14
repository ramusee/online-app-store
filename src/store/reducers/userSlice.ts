import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserState} from "../../models/interfaces";

const initialState: IUserState  = {
	firstName: '',
	lastName: '',
	telNumber: null,
	email: '',
}

export const userSlice = createSlice ({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action:PayloadAction<IUserState> ) => {
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
			state.telNumber = action.payload.telNumber
			state.email = action.payload.email
		}
	}
})

export default userSlice.reducer
