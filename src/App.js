import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { Employees } from './components/Employees'
import { AddForm } from './components/AddForm';
import { EmployeeSeed } from './seed/EmployeeSeed';
import { Order } from './components/Order';
import { Filter } from './components/Filter';
import Grid from '@material-ui/core/Grid';

function App() {
	const [employees, setEmployees] = useState(EmployeeSeed);
	const [sort, setSort] = useState('a-z');
	const [filter, setFilter] = useState('a-z');

	const aToM = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",]

	const nToZ = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

	const handleAddEmployee = ({ firstName, lastName, email }) => {
		const newEmployees = [...employees, { firstName, lastName, email }];
		handleOrder(sort);
		setEmployees(newEmployees);
	}

	const handleOrder = (orderType) => {
		console.log(orderType);
		setSort(orderType);
		const allEmployees = [...employees];
		switch (orderType) {
			case "firstname a-z":
				allEmployees.sort((a, b) => a.firstName.localeCompare(b.firstName));
				setEmployees(allEmployees);
				break
			case "firstname z-a":
				allEmployees.sort((a, b) => b.firstName.localeCompare(a.firstName));
				setEmployees(allEmployees);
				break
			case "lastname a-z":
				allEmployees.sort((a, b) => a.lastName.localeCompare(b.lastName));
				setEmployees(allEmployees);
				break
			case "lastname z-a":
				allEmployees.sort((a, b) => b.lastName.localeCompare(a.lastName));
				setEmployees(allEmployees);
				break
			case "email a-z":
				allEmployees.sort((a, b) => a.email.localeCompare(b.email));
				setEmployees(allEmployees);
				break
			case "email z-a":
				allEmployees.sort((a, b) => b.email.localeCompare(a.email));
				setEmployees(allEmployees);
				break
			default: return;
		}
	}

	const handleFilter = (filterType) => {
		console.log('filter type....', filterType);
		setFilter(filterType);
		const allEmployees = [...employees];
		switch (filterType) {
			case "lastname a-m": {
				const newEmployees = allEmployees.filter((employee) => {
					const lastnameLetter = employee.lastName.slice(0, 1).toLowerCase()
					if (aToM.indexOf(lastnameLetter) !== -1) {
						return employee;
					}
				})
				console.log(newEmployees)
				setEmployees(newEmployees);
				break
			}
			case "lastname n-z": {
				const newEmployees = allEmployees.filter((employee) => {
					const lastnameLetter = employee.lastName.slice(0, 1).toLowerCase()
					if (nToZ.indexOf(lastnameLetter) !== -1) {
						return employee;
					}
				})
				console.log(newEmployees)
				setEmployees(newEmployees);
				break
			}
			default: return;
		}
	}

	return (
		<React.Fragment>
			<AppBar position='sticky' style={{ padding: "10px" }}>
				<Typography variant="h3" align="center" >Employee Directory</Typography>
			</AppBar>
			<Container maxWidth="sm" >
				<Employees allEmployees={employees} />
				<Grid container justify="center" direction='row' style={{ marginTop: "30px" }}>
					<Grid item>
						<Order onOrder={handleOrder} />
					</Grid>
					<Grid item>
						<Filter onFilter={handleFilter} />
					</Grid>
				</Grid>
				<AddForm onAddEmployee={handleAddEmployee} />
			</Container>
		</React.Fragment >
	);
}

export default App;
