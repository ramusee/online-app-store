import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct, IProductsState} from "../../models/interfaces";

const initialState: IProductsState = {
	search: '',
	limit: 20,
	currentPage: 1,
	sort: 'discount',
	filters: {
		category: 'all',
		brands: [],
	}
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
		setCategory(state, action: PayloadAction<string>) {
			state.filters.category = action.payload;
		},
		setBrand(state, action: PayloadAction<IProduct["category"][]>) {
			state.filters.brands = action.payload;
		},
		setDefaultFilters(state) {
			state.filters.brands = [];
			state.filters.category = '';
		},
	}
});

export default mainSlice.reducer;