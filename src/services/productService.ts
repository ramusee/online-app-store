import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProduct} from "../interfaces/interfaces";

interface IQueryArgs {
	limit?: number;
	page?: number;
	sort?: string;
}

export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	tagTypes: [],
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], IQueryArgs> ({
			query: ({limit, page, sort}) => ({
				url: '/products',
				params: {
					_limit: limit,
					_page: page,
					_sort: sort,
				},
			})
		})
	})

});

export const {useFetchAllProductsQuery } = productAPI