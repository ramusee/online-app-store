export interface IProduct {
	item: IProduct;
	id: number;
	brand: string;
	category: string;
	title: string;
	description: string,
	price: number;
	discount: number;
	currency?: string;
	img: string;
	isChoise?: boolean;
	count: number;
}
export interface IProductsState {
	search: string;
	sorting: {
		limit: number;
		currentPage: number;
		sort: string;
		order: string;
	};
	filters: {
		category: string;
		brands: IProduct['category'][];
	};
	cart: {
		cartProducts: IProduct[];
	}
}
export interface ICartAction {
	id: number;
	newCount: number;
}
export interface IQueryArgs {
	search?: string;
	limit?: number;
	currentPage?: number;
	sort?: string;
	order?: string;
	category: string;
	brands: string[];
}

export interface ICategoryRu {
	[key: string]: string;
}
export interface ISortItemsRu {
	[key: string]: string;
}
