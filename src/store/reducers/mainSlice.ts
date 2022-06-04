import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductsState} from "../../models/interfaces";

const initialState: IProductsState = {
	search: '',
	limit: 20,
	currentPage: 1,
	sort: 'discount',
};

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		setLimit(state, action: PayloadAction<number>) {
			state.limit = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setSort(state, action: PayloadAction<string>) {
			state.sort = action.payload;
		},
	}
});

export default mainSlice.reducer;