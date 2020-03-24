import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const AddForm = ({ onAddEmployee }) => {
	const [employee, setEmployee] = useState({
		firstName: '',
		lastName: '',
		email: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		if (!employee.firstName || !employee.lastName || !employee.email) return;
		onAddEmployee({
			firstName: employee.firstName,
			lastName: employee.lastName,
			email: employee.email
		});
		setEmployee({
			firstName: '',
			lastName: '',
			email: ''
		});
	}

	return (
		<form style={{ alignItems: "center" }} onSubmit={handleSubmit} noValidate autoComplete="off">
			<div>
				<TextField
					placeholder="First Name"
					label="First Name"
					value={employee.firstName}
					onChange={e => setEmployee({
						firstName: e.target.value,
						lastName: employee.lastName,
						email: employee.email
					})}
				/>
				<TextField
					placeholder="Last Name"
					label="Last Name"
					value={employee.lastName}
					onChange={e => setEmployee({
						firstName: employee.firstName,
						lastName: e.target.value,
						email: employee.email
					})}
				/>
				<TextField
					placeholder="Email"
					label="Email"
					value={employee.email}
					onChange={e => setEmployee({
						firstName: employee.firstName,
						lastName: employee.lastName,
						email: e.target.value
					})}
				/>
			</div>
			<Button variant="contained" type="submit" component="button" color="primary">Add Employee</Button>
		</form>
	)
}
