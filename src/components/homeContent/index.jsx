import React, { useContext } from 'react';
import { Jumbotron, Container, Button, Card } from 'react-bootstrap';
import { AuthContext } from '../../contexts/authContext';
const Homecontent = () => {
    	const { isAuth } = useContext(AuthContext);
	return (
		<div
			className='Homecontent mx-auto mt-4 Home d-flex h-100 align-items-center'
			style={{ justifyContent: 'center' }}
		>
			<Card className='text-center'>
				<Card.Body>
					<Card.Title>
						<h1>Micro Projet</h1>
					</Card.Title>
					<Card.Text>
						<Jumbotron>
							<Container>
								<h4>
									This is sample Spring boot/React Application
									for an Ecomerce Website
								</h4>
							</Container>
						</Jumbotron>
					</Card.Text>
					{isAuth ? (
						''
					) : (
						<Button href='register' variant='outline-success'>
							Register
						</Button>
					)}
				</Card.Body>
			</Card>
		</div>
	);
};

export default Homecontent;
