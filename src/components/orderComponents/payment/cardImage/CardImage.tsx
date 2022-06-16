import React, {FC} from 'react';
import {IPropsCardImage} from "../../../../models/IProps";
import "./cardImage.css";
import mirIcon from "../../../../images/mir.png";

const CardImage: FC<IPropsCardImage> = ({
											cardValue,
											cardHolder,
											cardExpirationMonth,
											cardExpirationYear
										}) => {
	return (
		<div className="payment__card">
			<img className="card__chip"
				 src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
				 alt="chip"/>
			{cardValue.startsWith('5') && <img className="card__pay-system-icon"
											   src="https://cdn.icon-icons.com/icons2/2342/PNG/512/mastercard_payment_method_icon_142750.png"
											   alt="mastercard"/>}
			{cardValue.startsWith('4') && <img className="card__pay-system-icon"
											   src="https://cdn.icon-icons.com/icons2/2341/PNG/512/visa_payment_method_card_icon_142729.png"
											   alt="visa"/>}
			{cardValue.startsWith('2') && <img className="card__pay-system-icon"
											   src={mirIcon} alt="visa"/>}

			<span className="card__number">{cardValue || '#### #### #### ####'}</span>
			<div className="card__bottom-container">
				<span className="card__holder">{cardHolder.toUpperCase()}</span>
				{(cardExpirationMonth || cardExpirationYear)
					? <span className="card__expiration">
						{(cardExpirationMonth || '**') + '/' + (cardExpirationYear.slice(2) || '**')}
					  </span>
					: <span className="card__expiration">**/**</span>}
			</div>
		</div>
	);
};

export default CardImage;