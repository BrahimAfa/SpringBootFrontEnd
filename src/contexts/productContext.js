import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from '../services/product';
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState()
    // console.log("hello out-side 1", products);

    useEffect(() => {
        // console.log("hello in-side 1", products);

        (async () => {
            const { err, result } = await getProducts();
            if (err) {
                console.log("product error", err);
                setError(err.apiResponse.response?.data);
                return;
            }
            if (result) {
                console.log("product result", result);

                setProducts(result.apiResponse.data)
                // console.log("product result");
                return;
            }
            //console.log("hello in-side 2", products);

        })();
    }, []);

    //console.log("hello out-side 2", products);

    return (
        <ProductContext.Provider value={{ error, products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;