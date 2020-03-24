import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export const Filter = ({ onFilter }) => {

	const handleChange = event => {
		onFilter(event.target.value);
	};

	return (
		<div>
			<FormControl component="fieldset">
				<FormLabel component="legend">Filter By: </FormLabel>
				<RadioGroup onChange={handleChange} aria-label="order" name="customized-radios">
					<FormControlLabel value="lastname a-m" control={<Radio />} label="lastname a-k" />
					<FormControlLabel value="lastname n-z" control={<Radio />} label="lastname l-z" />
				</RadioGroup>
			</FormControl>
		</div>
	)
}
