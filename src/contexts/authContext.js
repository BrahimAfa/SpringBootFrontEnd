import React, { createContext, useState } from 'react'
import { login, getRole } from '../services/User'
import { setToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../utils/helper';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {



    const isUserAuth = () => {
        return getFromLocalStorage("user") ? true : false;
    }


    const isInAdminRole = () => {
        // console.log("hello in-side 1", products);
        (async () => {
            const _role = await getRole(getFromLocalStorage("user")?.id);
            if (_role) {
                setAdmin(_role === 'ROLE_ADMIN')
                return isAdmin;
            }
            //console.log("hello in-side 2", products);

        })();
    };

    const [isAuth, setAuth] = useState(isUserAuth())
    const [isAdmin, setAdmin] = useState(isInAdminRole())
    const [user, setUser] = useState(getFromLocalStorage('user'))

    const Login = async (user) => {
        const { err, result } = await login(user);
        if (err) {
            console.log("error ", err);
            setAuth(false)
            return;
        }
        else if (result) {
            setToLocalStorage("user", result.apiResponse.data)
            console.log("usernotKEY ", result.apiResponse.data);
            setUser(result.apiResponse.data)
            setAuth(true)
            isInAdminRole();
        }
    }
    //logout
    function Logout() {
        removeFromLocalStorage("user");
        setAuth(false);
    }

    return (
        <AuthContext.Provider value={{ isAuth, isAdmin, Login, Logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;