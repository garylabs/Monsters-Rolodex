import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, onFormChange, value }) => (
	<input
		type="search"
		placeholder={placeholder}
		value={value}
		onChange={onFormChange}
		className="search"
	/>
);
