import React, { useContext, useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { ClientContext } from '../../contexts/clientContext';
import Authorize from '../AuthorizeAdmin';

import Row from '../RowClient';
import { delUser } from '../../services/User';

const ClientControler = () => {
	const { clients, setClients, error } = useContext(ClientContext);
	const [idDeleted, setIdDeleted] = useState(0);
	useEffect(() => {
		setClients(clients.filter((p) => p.id !== idDeleted));
	}, [idDeleted]);

	const delC = async (id) => {
		const { err, result } = await delUser(id);
		if (err) {
			console.log('Client delete error', err);
			alert('Faild while trying to delete the Client ' + id);
			return;
		}
		if (result) {
			console.log('client dele done', result);
			setIdDeleted(id);
		}
	};
	return (
		<Authorize beRole='ADMIN'>
			<Container>
				<Table
					striped
					bordered
					hover
					variant='dark'
					className='text-center mt-4'
				>
					<thead>
						<tr>
							<th>#</th>
							<th>username</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Manage</th>
						</tr>
					</thead>
					<tbody>
						{clients.map((client, key) => {
							return (
								<Row delC={delC} client={client} key={key} />
							);
						})}
					</tbody>
				</Table>
			</Container>
		</Authorize>
	);
};

export default ClientControler;
