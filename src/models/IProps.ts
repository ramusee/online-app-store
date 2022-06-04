export interface IContextOptionPanel {
	sort: string;
	limit: number;
	onSetLimit: (limit: number) => void;
	onSetSort: (sort: string) => void;
	productsLength?: number;
}

export interface IPropsDropDown {
	onSetIsActive: (isActive: boolean) => void;
}