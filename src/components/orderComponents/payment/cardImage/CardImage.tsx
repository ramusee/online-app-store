import React, {FC} from 'react';
import {IPropsCardImage} from "../../../../models/IProps";
import "./cardImage.css";
import mirIcon from "../../../../images/mir.png";
import visaIcon from "../../../../images/visa_icon.png"
import masterCardIcon from "../../../../images/mastercard_icon.png"

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
											   src={masterCardIcon}
											   alt="mastercard"/>}
			{cardValue.startsWith('4') && <img className="card__pay-system-icon"
											   src={visaIcon}
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