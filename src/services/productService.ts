import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProduct} from "../models/interfaces";
import {IQueryArgs} from "../models/interfaces";


export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	tagTypes: [],
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], IQueryArgs>({
			query: ({search, limit, currentPage, sort, order}) => ({
				url: '/products',
				params: {
					q: search,
					_limit: limit,
					_page: currentPage,
					_sort: sort === ('priceMin') || sort === ('priceMax') ? 'price' : sort,
					_order: order,
				},
			})
		})
	})

});

export const {useFetchAllProductsQuery} = productAPI;