
export interface IContextOptionPanel {
	visible?: number;
	order: string;
	setOrder: (order: string) => void;
}

export interface IPropsDropDown {
	dropDownOptions: string[] | number[];
}