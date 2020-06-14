import React from 'react';
import { Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Search = ({ term, handleSearch, toggleForm }) => {
	console.log('This is search page');
	return (
		<div className="d-flex my-4">
			<Input
				placeholder="Enter Search Term"
				className="mr-3 w-75"
				value={term}
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<Button className="w-25" color="primary" onClick={toggleForm}>
				Create New Todo
			</Button>
		</div>
	);
};

Search.propTypes = {
	term: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired
};

export default Search;
