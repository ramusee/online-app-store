import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainReducer from './reducers/mainSlice';
import {productAPI} from "../services/productService";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: [productAPI.reducerPath],
}
const rootReducer = combineReducers({
	mainReducer,
	[productAPI.reducerPath]: productAPI.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const setupStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck:{
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			}).concat(productAPI.middleware)
	});
};

export const store = setupStore();
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']