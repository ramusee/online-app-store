import {createSlice} from "@reduxjs/toolkit";
import {IProductsState} from "../interfaces/interfaces";
import {catalog} from "../../catalog/catalog";

const productsList = JSON.parse(JSON.stringify(catalog))

const initialState: IProductsState = {
	all: productsList.products,
	visible: [],
	cartsProducts: [],
};

export const productSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
	}
});

export default productSlice.reducer;