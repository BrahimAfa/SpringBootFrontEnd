import React, { useContext, useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { ProductContext } from '../../contexts/productContext';
import Row from './RowDetails';

const ProductControll = () => {
    const { products, setProducts } = useContext(ProductContext)
    const [idDeleted, setIdDeleted] = useState(0)
    useEffect(() => {
        setProducts(products.filter(p => p.id !== idDeleted))
    }, [idDeleted])
    return (
        
        <Container>
            <Table striped bordered hover variant="dark" className="text-center mt-4">
                <thead  >
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
                    {
                        products.map((product, key) => {
                            return <Row idDeleted={setIdDeleted} product={product} key={key} />
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default ProductControll;