import React, { createContext, useState, useEffect } from 'react'
import { login } from '../services/User'
import { setToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../utils/helper';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const isUserAuth = () => {
        return getFromLocalStorage("user") ? true : false;
    }

    const [isAuth, setAuth] = useState(isUserAuth())
    const [user, setUser] = useState(getFromLocalStorage('user'))

    const Login = async (user) => {
        const { err, result } = await login(user);
        if (err) {
            setAuth(false)
            return;
        }
        else if (result) {
            setToLocalStorage("user", result.apiResponse.data)
           // console.log("usernotKEY ", result.apiResponse.data);
            setUser(result.apiResponse.data)
            setAuth(true)
        }
    }
    const Logout = () => {
        removeFromLocalStorage("user");
        setAuth(false);
    }

    return (
        <AuthContext.Provider value={{ isAuth, Login, Logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;