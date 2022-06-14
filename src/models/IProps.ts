import {IProduct} from "./interfaces";

export interface IContextOptionPanel {
	visible?: number;
	order: string;
	setOrder: (order: string) => void;
}

export interface IPropsDropDown {
	dropDownOptions: string[] | number[];
}

export interface IPropsCalculator {
	cartProducts: IProduct[];
}

export interface IPropsCartItem {
	id: number;
	title: string;
	price: number;
	img: string;
	count: number;
	discount: number;
}
export interface IPropsCardImage {
	cardValue: string;
}