import React, { useState, useContext, useEffect } from 'react';
import { getProduct, update } from '../../services/product';
import { AuthContext } from '../../contexts/authContext';
import Loading from '../loading';
import Authorize from '../AuthorizeAdmin';

import ProductForm from '../ProductForm';
import { useParams } from 'react-router-dom';
const UpdateProduct = () => {
	const { id } = useParams();
	console.log('PRODUCT PARAM', id);

	const { isAuth } = useContext(AuthContext);
	const [validated, setValidated] = useState(false);
	const [showErr, setShowErr] = useState(false);
	const [errors, setErrors] = useState([]);
	const [showSucces, setShowSucces] = useState(false);
	const [message, setMessage] = useState([]);
	const [product, setProduct] = useState({});
	useEffect(() => {
		console.log('uodate hello product', id);

		(async () => {
			const { err, result } = await getProduct(id);

			if (err) {
				setShowErr(true);
				setErrors(['no Product with Spicified ID']);
				return;
			}
			if (result) {
				setShowErr(false);
				setProduct(result.apiResponse.data);
				console.log('product result');
				return;
			}
		})();
	}, []);
	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();
		//chikking the validity of the Register Form
		if (!form.checkValidity()) return setValidated(true);

		const { err, result } = await update(id, product);
		if (err) {
			console.log(err);
			setShowErr(true);
			let data =
				err.apiResponse.response?.data ??
				'Faild To Connect-Try again later';
			setErrors(data.message.split('-'));
			return;
		} else if (result) {
			console.log(result);
			setShowSucces(true);
			setShowErr(false);
			setMessage(['Product Updated']);
		}
	};
	const handleChange = (e) => {
		if (e.target.name !== 'category') {
			setProduct({ ...product, [e.target.name]: e.target.value });
		} else {
			setProduct({
				...product,
				category: { id: e.target.value, name: 'Faild' },
			});
		}
		console.log(product);
	};
	return (
		<div>
			<Authorize beRole='ADMIN'>
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
			</Authorize>
		</div>
	);
};

export default UpdateProduct;
