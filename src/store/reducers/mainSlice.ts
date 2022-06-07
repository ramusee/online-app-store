import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartAction, IProduct, IProductsState} from "../../models/interfaces";


const initialState: IProductsState = {
	search: '',
	sorting: {
		limit: 20,
		currentPage: 1,
		sort: 'discount',
		order: 'desc',
	},
	filters: {
		category: 'all',
		brands: [],
	},
	cart: {
		cartProducts: [],
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
				state.sorting.limit = action.payload;
			},
			setCurrentPage(state, action: PayloadAction<number>) {
				state.sorting.currentPage = action.payload;
			},
			setSort(state, action: PayloadAction<string>) {
				state.sorting.sort = action.payload;
			},
			setOrder(state, action: PayloadAction<string>) {
				state.sorting.order = action.payload;
			},
			setCategory(state, action: PayloadAction<string>) {
				state.filters.category = action.payload;
			},
			changeBrands(state, action: PayloadAction<string>) {
				state.filters.brands.includes(action.payload)
					? state.filters.brands = state.filters.brands.filter(brand => brand !== action.payload)
					: state.filters.brands.push(action.payload);
			},
			setDefaultFilters(state) {
				state.filters.brands = [];
				state.filters.category = 'all';
			},
			addCartProducts(state, action: PayloadAction<IProduct>) {
				state.cart.cartProducts.push(action.payload);
			},
			changeCount(state, action: PayloadAction<ICartAction>) {
				state.cart.cartProducts = state.cart.cartProducts.map(
					(item) => {
						if (item.id === action.payload.id) {
							return {...item, count: action.payload.newCount};
						}
						return item;
					}
				);
			}
		}
	})
;

export default mainSlice.reducer;