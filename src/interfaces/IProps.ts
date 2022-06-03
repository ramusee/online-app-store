export interface IContextSortPanel {
	sort: string;
	onSetLimit: (limit: number) => void;
	onSetPage: (page: number) => void;
	onSetSort: (sort: string) => void;
	productsLength?: number;
}

export interface IPropsDropDown {
	onSetIsActive: (isActive: boolean) => void;
}