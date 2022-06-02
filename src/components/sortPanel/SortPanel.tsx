import React, {FC} from 'react';
import './sortPanel.css';
import {useAppSelector} from "../../store/hooks/hooksRedux";

const SortPanel: FC = () => {
	const {all, visible} = useAppSelector(state => state.mainReducer);

	return (
		<div className="sort-panel">
			<div className="container">
				<span className="result-counter">
					Найдено: {visible?.length} товаров
				</span>

			</div>
		</div>
	);
};

export default SortPanel;