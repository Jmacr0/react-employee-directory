import React from 'react'
import { Employee } from './Employee'
import Grid from '@material-ui/core/Grid';

export const Employees = ({ allEmployees }) => {
	console.log(allEmployees);
	return (
		<Grid container justify="center" direction='column'>
			<Grid container item justify='center'>
				<h2>Employees</h2>
			</Grid>
			<Grid container item direction='row' justify="space-evenly">
				<Grid item><h3>FirstName</h3></Grid>
				<Grid item><h3>LastName</h3></Grid>
				<Grid item><h3>Email</h3></Grid>
			</Grid>
			{allEmployees.map((employee, index) => {
				return <Employee key={index} employee={employee} />
			})}
		</Grid>
	)
}
