import React, {FC} from 'react';
import {IPropsCardImage} from "../../../../models/IProps";
import "./cardImage.css";

const CardImage: FC<IPropsCardImage> = ({cardValue}) => {
	return (
		<div className="payment__card">
			<span className={"card__number"}>{cardValue || '#### #### #### ####'}</span>
		</div>
	);
};

export default CardImage;