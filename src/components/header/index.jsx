import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/authContext';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const history = useHistory();
	const { isAuth, isAdmin, user, Logout } = useContext(AuthContext);
	const Name = isAuth ? `Welcome Mr. ${user.lname}` : 'Welcom.';
	console.log('ISADMIIIN', isAdmin);
	const _Logout = () => {
		Logout();
		history.push('/');
	};
	const AuthenticatedUserJSX = () => {
		return (
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/catalogue'>
						Consulter le Catalogue
					</Nav.Link>
					<Nav.Link href='/chart'>visualiser votre panier</Nav.Link>
					<Nav.Link href='#link'>Suivre vos commandes</Nav.Link>
				</Nav>
				<Button onClick={Logout} variant='outline-danger'>
					Logout
				</Button>
			</Navbar.Collapse>
		);
	};
	const AuthenticatedAdminJSX = () => {
		return (
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/catalogue'>
						Consulter le Catalogue
					</Nav.Link>
					<Nav.Link href='/products'>Gérer les Produits</Nav.Link>
					<Nav.Link href='/users'>Gérer les Clients</Nav.Link>
					<Nav.Link href='/product/add'>Ajouter Produit</Nav.Link>
					{/* <Nav.Link href='/commands'>Les Commands</Nav.Link> */}
				</Nav>
				<Button onClick={_Logout} variant='outline-danger'>
					Logout
				</Button>
			</Navbar.Collapse>
		);
	};
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='/account'>{Name}</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				{isAuth ? (
					isAdmin ? (
						AuthenticatedAdminJSX()
					) : (
						AuthenticatedUserJSX()
					)
				) : (
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
						</Nav>
						<Button href='/login' variant='outline-success'>
							Login
						</Button>
					</Navbar.Collapse>
				)}
			</Navbar>
		</div>
	);
};

export default Header;
