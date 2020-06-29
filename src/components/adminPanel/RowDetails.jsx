import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { updateChart, getFromLocalStorage } from '../../utils/helper';

const Row = ({ product, delP, isChart }) => {
	const [price, setPrice] = useState(product.price);
	const _qte = isChart ? 1 : product.qte;
	const [qte, setQte] = useState(product.qte);
	const mystyle = {
		display: 'flex',
		justifyContent: 'space-evenly',
	};
	const handleChange = (e) => {
		setPrice(product.price * e.target.value);
		setQte(e.target.value);
		updateChart(product.id, product.price * e.target.value, e.target.value);
		console.log(product);
	};
	return (
		<tr className={!isChart && qte < 10 ? 'bg-danger' : ''}>
			<td>{product.id}</td>
			<td>{product.name}</td>
			<td>{product.description}</td>
			<td>{price}DH</td>
			<td>
				{isChart ? (
					<input type='number' onChange={handleChange} value={qte} />
				) : (
					qte
				)}
			</td>
			<td>{product.category?.name ?? 'N/A'}</td>
			<td colSpan='2' style={mystyle}>
				{!isChart ? (
					<Button
						href={`product/update/${product.id}`}
						variant='info'
					>
						update
					</Button>
				) : (
					''
				)}

				<Button onClick={() => delP(product.id)} variant='danger'>
					delete
				</Button>
			</td>
		</tr>
	);
};

export default Row;
