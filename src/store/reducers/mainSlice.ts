import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct, IProductsState} from "../../interfaces/interfaces";

const initialState: IProductsState = {
	all: [],
	visible: [],
	cartsProducts: [],
	isLoading: false,
	error: '',
};

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.all = action.payload
		}
	}
});

export default mainSlice.reducer;