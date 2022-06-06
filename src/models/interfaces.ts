export interface IProduct {
	id: number;
	brand: string;
	category: string;
	title: string,
	description?: IDescription,
	price: number;
	discount: number;
	currency?: string;
	img: string;
	isChoise?: boolean;
	count?: number;
}
export interface IDescription {
	"Процессор: ": string;
	"Оперативная память: ": string;
	"Общий объем eMMC, ГБ: ": string;
	"Видеокарта: ": string;
	"Операционная система: ": string;
}
export interface IProductsState {
	search: string;
	limit: number;
	currentPage: number;
	sort: string;
	filters: {
		category: string;
		brands: IProduct['category'][],
	}
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
