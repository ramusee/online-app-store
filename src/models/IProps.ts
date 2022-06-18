import {IDelivery, IProduct} from "./interfaces";

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
	cardHolder: string;
	cardValue: string;
	cardExpirationMonth: string;
	cardExpirationYear: string;
}
export interface IPropsTotal {
	firstName?: string;
	lastName?: string;
	email?: string;
	telNumber?: number | null;
	cardNumber?: string;
	delivery?: IDelivery;
}