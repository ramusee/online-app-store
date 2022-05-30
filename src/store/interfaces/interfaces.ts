interface IProduct {
	title: string;
	price: string;
	image: string;
}

export interface ICartState {
	products: IProduct[];
	cartsProducts: IProduct[];
}