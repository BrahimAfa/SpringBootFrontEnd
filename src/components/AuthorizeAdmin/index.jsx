import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
//beRole==> the role to be in for authorization
const Authorize = ({ beRole, children }) => {
	const { isAuth, user } = useContext(AuthContext);

	const isAuthorized = ({ roles }) => {
		console.log(user);
		return roles.indexOf('ROLE_' + beRole) > -1;
	};

	return (
		<div>
			{isAuth && isAuthorized(user) ? (
				children
			) : (
				<Redirect
					to={{
						pathname: '/error/403',
						message: 'You are Not Authorized!',
						description: 'You Have to be an Admin to see this Page',
						cssClass: 'forbidden',
					}}
				/>
			)}
		</div>
	);
};
export default Authorize;
