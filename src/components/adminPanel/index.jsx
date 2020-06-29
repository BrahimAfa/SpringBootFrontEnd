import React, { useContext, useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { ProductContext } from '../../contexts/productContext';
import Authorize from '../AuthorizeAdmin';

import Row from './RowDetails';
import { delProduct } from '../../services/product';

const ProductControll = () => {
    const { products, setProducts } = useContext(ProductContext)
    const [idDeleted, setIdDeleted] = useState(0)
    useEffect(() => {
        setProducts(products.filter(p => p.id !== idDeleted))
    }, [idDeleted])
    const delP = async (id) => {
        const { err, result } = await delProduct(id)
        if (err) {
            console.log("Product delete error", err);
            alert("Faild while trying to delete the Product " + id)
            return;
        }
        if (result) {
            console.log("product dele done", result);
            setIdDeleted(id);
        }
    }
    return (
        <Authorize beRole="ADMIN">
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
                                return <Row delP={delP} product={product} key={key} />
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </Authorize>
    );
}

export default ProductControll;