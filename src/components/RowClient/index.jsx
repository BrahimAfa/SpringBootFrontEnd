import React from 'react';
import { Button } from 'react-bootstrap';

const Row = ({ client, delC }) => {
	const mystyle = {
		display: 'flex',
		justifyContent: 'space-evenly',
	};

	return (
		<tr>
			<td>{client.id}</td>
			<td>{'@' + client.username}</td>
			<td>{client.fname}</td>
			<td>{client.lname}</td>
			<td>{client.email}</td>
			<td>{client.role}</td>
			<td colSpan='2' style={mystyle}>
				<Button href={`user/update/${client.id}`} variant='info'>
					update
				</Button>
				<Button onClick={() => delC(client.id)} variant='danger'>
					delete
				</Button>
			</td>
		</tr>
	);
};

export default Row;
