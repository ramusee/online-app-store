import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProduct} from "../models/interfaces";
import {IQueryArgs} from "../models/interfaces";


export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], IQueryArgs>({
			query: ({search, limit, currentPage, sort, order, category, brands}) => ({
				url: `/products?&brand_like=${brands.join('&brand_like=')}`,
				params: {
					q: search,
					category: category === 'all' ? undefined : category,
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