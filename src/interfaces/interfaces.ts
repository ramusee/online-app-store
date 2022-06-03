export interface IProduct {
	id: number;
	brand: string;
	category: string;
	title: string,
	description?: IDescription,
	price: number;
	discount?: number;
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
	all: IProduct[];
	visible: IProduct[]
	cartsProducts: IProduct[];
	isLoading: boolean;
	error: string;
}
export interface ICategoryRu {
	[key: string]: string;
}
export interface ISortOptionsRu {
	[key: string]: string;
}