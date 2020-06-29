import React, { useContext, useState } from 'react';
import Product from '../productDetaills';
import ApiAlert from '../ApiError';
import { ProductContext } from '../../contexts/productContext';
import { Container, Row } from 'react-bootstrap';
import { setToLocalStorage } from '../../utils/helper';

const ProductList = () => {
	const { products, error } = useContext(ProductContext);
	const [chart, setChart] = useState([]);
	const Add = (product) => {
        product.qte=1;
		const val = [...chart, product];
		console.log(val);
		setToLocalStorage('chart', val);
		setChart(val);
	};
	console.log('LIST of products', error);

	return (
		<div>
			{error ? (
				<ApiAlert error={error} />
			) : (
				<Container>
					<Row style={{ justifyContent: 'space-evenly' }}>
						{products.map((product) => (
							<Product
								add={Add}
								key={product.id}
								product={product}
							/>
						))}
					</Row>
				</Container>
			)}
		</div>
	);
};

export default ProductList;
