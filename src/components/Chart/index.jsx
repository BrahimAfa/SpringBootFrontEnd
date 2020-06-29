import React, { useContext, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import Row from '../adminPanel/RowDetails';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/helper';

const ProductChart = () => {
	const [products, setProducts] = useState(getFromLocalStorage('chart'));

	const delP = (id) => {
		const filtredProducts = products.filter((p) => p.id !== id);
		setToLocalStorage('chart', filtredProducts);
		setProducts(filtredProducts);
		console.log('after Filtring ', filtredProducts);
	};
	//save order
	// admin see all the client
	// update products
	// delete products
	const saveOrder = () => {};
	return (
		<Container>
			<Table
				striped
				bordered
				hover
				variant='dark'
				className='text-center mt-4'
			>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Description</th>
						<th>price</th>
						<th>Qte</th>
						<th>Category</th>
						<th>Manage</th>
					</tr>
				</thead>
				<tbody>
					{products?.map((product, key) => {
						return (
							<Row
								isChart={true}
								delP={delP}
								product={product}
								key={key}
							/>
						);
					})}
				</tbody>
			</Table>
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-evenly ',
				}}
			>
				<Button variant='primary' style={{ width: '45%' }}>
					Save Order
				</Button>
				<Button variant='danger' style={{ width: '45%' }}>
					delete All
				</Button>
			</div>
		</Container>
	);
};

export default ProductChart;
