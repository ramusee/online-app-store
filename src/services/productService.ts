import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProduct} from "../interfaces/interfaces";


export const productAPI = createApi({
	reducerPath: 'productAPi',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	endpoints: (builder) => ({
		fetchAllProducts: builder.query<IProduct[], number> ({
			query: (limit: number = 10) => ({
				url: '/products',
				params: {
					_limit: limit,
				}
			})
		})
	})

});