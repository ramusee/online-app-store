import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainReducer from './reducers/mainSlice';
import {productAPI} from "../services/productService";

const rootReducer = combineReducers({
	mainReducer,
	[productAPI.reducerPath]: productAPI.reducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(productAPI.middleware)
	});
};
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']