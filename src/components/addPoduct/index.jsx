import React, { useState, useContext } from 'react';
import { save } from '../../services/product'
import { AuthContext } from '../../contexts/authContext';
import Loading from '../loading';
import ProductForm from '../ProductForm';
const AddProduct = () => {

    const { isAuth } = useContext(AuthContext)
    const [validated, setValidated] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [errors, setErrors] = useState([]);
    const [showSucces, setShowSucces] = useState(false);
    const [message, setMessage] = useState([]);
    const [product, setProduct] = useState({});

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        //chikking the validity of the Register Form
        if (!form.checkValidity()) return setValidated(true);

        const { err, result } = await save(product);
        if (err) {
            console.log(err);
            setShowErr(true);
            let data = err.apiResponse.response?.data ?? "Faild To Connect-Try again later"
            setErrors(data.message.split('-'));
            return;
        }
        else if (result) {
            console.log(result);
            setShowSucces(true);
            setShowErr(false);

            setMessage(["Product Saved"])
        }

    }
    const handleChange = e => {
        if (e.target.name !== 'category') {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }
        else {
            setProduct({ ...product, category: { id: e.target.value, name: "Faild" } });
        }
        console.log(product);
    }
    return (
        <div>
            {
                !isAuth ? <Loading to='/catalogue' /> :
                    // { handleChange, product, showSucces, showErr, errorMessage, succesMessage }
                    <ProductForm
                        handleSubmit={handleSubmit}
                        validated={validated}
                        product={product}
                        handleChange={handleChange}
                        showSucces={showSucces}
                        setShowSucces={setShowSucces}
                        setShowErr={setShowErr}
                        showErr={showErr}
                        errorMessage={errors}
                        succesMessage={message}
                    />
            }
        </div >

    );
}

export default AddProduct;