import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export const Order = ({ onOrder }) => {

	const handleChange = event => {
		onOrder(event.target.value);
	};

	return (
		<div>
			<FormControl component="fieldset">
				<FormLabel component="legend">Order By: </FormLabel>
				<RadioGroup onChange={handleChange} aria-label="order" name="customized-radios">
					<FormControlLabel value="firstname a-z" control={<Radio />} label="firstname a-z" />
					<FormControlLabel value="firstname z-a" control={<Radio />} label="firstname z-a" />
					<FormControlLabel value="lastname a-z" control={<Radio />} label="lastname a-z" />
					<FormControlLabel value="lastname z-a" control={<Radio />} label="lastname z-a" />
					<FormControlLabel value="email a-z" control={<Radio />} label="email a-z" />
					<FormControlLabel value="email z-a" control={<Radio />} label="email z-a" />
				</RadioGroup>
			</FormControl>
		</div>
	)
}
