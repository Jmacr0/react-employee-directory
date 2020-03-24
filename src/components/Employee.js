import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export const Employee = ({ employee }) => {
	return (
		<Grid container item direction='row' justify="space-evenly">
			<Grid item>{employee.firstName}</Grid>
			<Grid item>{employee.lastName}</Grid>
			<Grid item>{employee.email}</Grid>
		</Grid>
	)
}
