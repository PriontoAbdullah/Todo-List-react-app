import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter }) => {
	return (
		<ButtonGroup>
			<Button onClick={() => handleFilter('all')}>View All</Button>
			<Button onClick={() => handleFilter('running')}>Running</Button>
			<Button onClick={() => handleFilter('completed')}>Completed</Button>
		</ButtonGroup>
	);
};

Filter.propTypes = {
	handleFilter: PropTypes.func.isRequired
};

export default Filter;
