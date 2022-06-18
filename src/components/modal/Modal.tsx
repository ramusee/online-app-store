import React, {FC, ReactNode} from 'react';
import "./modal.css"

interface IPropsModal {
	active: boolean;
	setActive: (modalActive: boolean) => void;
	children: ReactNode
}

const Modal: FC<IPropsModal> = ({active, setActive, children}) => {
	return (
		<div className={active ? "modal active-modal" : "modal"} onClick={()=> setActive(false)}>
			<div className={active ? "modal__content active-modal" : "modal__content"} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;