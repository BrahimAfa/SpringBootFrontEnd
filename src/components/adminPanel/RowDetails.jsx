import React from 'react';
import { Button } from 'react-bootstrap';
import { delProduct } from '../../services/product';

const Row = ({ product, idDeleted }) => {

    const mystyle = {
        display: 'flex',
        justifyContent: 'space-evenly'
    };

    //delete Product
    const delP = async (id) => {
        const { err, result } = await delProduct(id)
        if (err) {
            console.log("Product delete error", err);
            alert("Faild while trying to delete the Product " + id)
            return;
        }
        if (result) {
            console.log("product dele done", result);
            idDeleted(id);
        }
    }
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.qte}</td>
            <td>{product.category?.name ?? "N/A"}</td>
            <td colSpan="2" style={mystyle}>
                <Button href={`product/update/${product.id}`} variant="info">update</Button>
                <Button onClick={() => delP(product.id)} variant="danger">delete</Button>
            </td>
        </tr>

    );
}

export default Row;