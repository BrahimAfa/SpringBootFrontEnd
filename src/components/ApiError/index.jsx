import React from 'react';
import { Alert } from 'react-bootstrap';
const ApiAlert = (prop) => {
	const { error, status } = prop.error;

	return (
		<Alert
			variant='danger'
			show={prop.show}
			onClose={prop.close}
			dismissible
		>
			<Alert.Heading>{error}</Alert.Heading>
			{resolveMessage(status)}
		</Alert>
	);
};
const resolveMessage = (status) => {
	switch (status) {
		case 401:
			return 'Your not logged in to see this resource';
		case 403:
			return 'Your not Authorized to see this resource pleas conatct';
		default:
			break;
	}
};
export default ApiAlert;
