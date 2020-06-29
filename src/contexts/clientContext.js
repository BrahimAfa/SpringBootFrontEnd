import React, { createContext, useState, useEffect } from 'react'
import { getClients } from '../services/User';
export const ClientContext = createContext();

const ClientContextProvider = ({ children }) => {

    const [clients, setClients] = useState([])
    const [error, setError] = useState()
    // console.log("hello out-side 1", clients);

    useEffect(() => {
        // console.log("hello in-side 1", clients);

        (async () => {
            const { err, result } = await getClients();
            if (err) {
                console.log("client error", err);
                setError(err.apiResponse.response?.data);
                return;
            }
            if (result) {
                console.log("client result", result);
                setClients(result.apiResponse.data)
                // console.log("client result");
                return;
            }
            //console.log("hello in-side 2", clients);

        })();
    }, []);

    //console.log("hello out-side 2", clients);

    return (
        <ClientContext.Provider value={{ error, clients, setClients }}>
            {children}
        </ClientContext.Provider>
    )
}
export default ClientContextProvider;