import React, {FC} from 'react';
import './sortPanel.css';
import {useAppSelector} from "../../store/hooks/hooksRedux";

const SortPanel: FC = () => {
	const {all} = useAppSelector(state => state.productReducer);

	return (
		<div className="sort-panel">
			<div className="container">
				<span className="result-counter">
					Найдено: {all?.length} товаров
				</span>
			</div>
		</div>
	);
};

export default SortPanel;