import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductsState} from "../../models/interfaces";

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
		changeBrands(state, action: PayloadAction<string>) {
			state.filters.brands.includes(action.payload)
				? state.filters.brands = state.filters.brands.filter(brand => brand !== action.payload)
				: state.filters.brands.push(action.payload)
		},
		setDefaultFilters(state) {
			state.filters.brands = [];
			state.filters.category = 'all';
		},
	}
});

export default mainSlice.reducer;