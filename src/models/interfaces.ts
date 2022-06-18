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
	currentOrderTab: number;
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
	};
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

export interface IUserState {
	userData: IUserData;
	card: IUserCardState;
	delivery: IDelivery;
}
export interface IDelivery {
	country: string;
	city: string;
	address: string;
}

export interface IUserData {
	firstName: string;
	lastName: string;
	telNumber: number | null;
	email: string;
}

export interface IUserCardState {
	number: number | null;
	holder: string;
	expiration: {
		month: number | null;
		year: number | null;
	};
	cvv: number | null;
}

export interface ICategoryRu {
	[key: string]: string;
}

export interface ISortItemsRu {
	[key: string]: string;
}
