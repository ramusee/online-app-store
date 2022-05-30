import React, {FC} from 'react';
import './sortPanel.css';

const SortPanel: FC = () => {
	return (
		<div className="sort-panel">
			<div className="container">
				<span className="result-counter">
					701 results for "asus laptop"
				</span>
			</div>
		</div>
	);
};

export default SortPanel;