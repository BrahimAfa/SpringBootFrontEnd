import React from 'react';
import '../productDetaills/index.css'
import { Card, Button, Row, Container } from 'react-bootstrap';

function Product({ product }) {
    return (

        <Card border="dark" style={{ width: '18rem', margin: "10px" }}>
            <Card.Img variant="top" src={`https://i.picsum.photos/id/${Math.round(Math.random() * 100)}/1024/720.jpg`} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Footer>
                    <Card.Link style={{ color: "#dc3545" }} href="#">{`Only ${product.price}$`}</Card.Link>
                </Card.Footer>
                <Card.Link href="#">Add to Chart</Card.Link>
                <Card.Link href="#">View</Card.Link>

            </Card.Body>
        </Card>
    );
}


export default Product;