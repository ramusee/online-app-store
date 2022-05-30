import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartState} from "../interfaces/interfaces";

const initialState: ICartState = {
	products: [],
	cartsProducts: [],
};


export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<string>) {
		}
	}
});

export default cartSlice.reducer;