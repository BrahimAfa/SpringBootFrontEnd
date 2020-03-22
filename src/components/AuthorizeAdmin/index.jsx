import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext';
//beRole==> the role to be in for authorization
const Authorize = ({ beRole, children }) => {
    const { isAuth, user } = useContext(AuthContext)

    const isAuthorized = ({ role }) => role?.toLowerCase() == beRole.toLowerCase();

    return (
        <div>
            {isAuth && isAuthorized(user) ? children : <Redirect to="/" />}
        </div>
    )
}
export default Authorize;