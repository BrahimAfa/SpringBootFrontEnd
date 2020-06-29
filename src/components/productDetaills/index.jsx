import React from 'react';
import '../productDetaills/index.css';
import { Card, Button } from 'react-bootstrap';

function Product({ product, add }) {
	const images = [
		'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberries-1330459_960_720.jpg',
		'https://cdn.pixabay.com/photo/2015/12/30/11/57/fruit-basket-1114060_960_720.jpg',
		'https://cdn.pixabay.com/photo/2014/12/21/23/34/swiss-cheese-575540_960_720.png',
		'https://cdn.pixabay.com/photo/2016/12/06/18/27/milk-1887237_960_720.jpg',
		'https://cdn.pixabay.com/photo/2018/01/10/13/47/essential-oil-3073901_960_720.jpg',
	];

	return (
		<Card border='dark' style={{ width: '18rem', margin: '10px' }}>
			<Card.Img
				variant='top'
				src={images[Math.floor(Math.random() * 4)]}
				height='200px'
			/>
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>{product.description}</Card.Text>
				<Card.Footer>
					<Card.Link
						style={{ color: '#dc3545' }}
						href='#'
					>{`Only ${product.price}$`}</Card.Link>
				</Card.Footer>
				<Button variant='outline-primary' onClick={() => add(product)}>
					Add to Chart
				</Button>
				<Button variant='outline-primary'>View</Button>
			</Card.Body>
		</Card>
	);
}

export default Product;
