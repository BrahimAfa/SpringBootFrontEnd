import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import ALert from '../alert'
const ProductForm = ({ handleChange, handleSubmit, product, showSucces, validated, showErr, setShowErr, setShowSucces, errorMessage, succesMessage }) => {

    return (
        <Container className="mx-auto" style={{ width: "500px" }} >

            <Card className="mt-4">

                <ALert message={errorMessage} variant="danger" show={showErr} close={() => setShowErr(false)} />
                <ALert message={succesMessage} variant="success" show={showSucces} close={() => setShowSucces(false)} />

                <Card.Header>Add New Product : </Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={product.name}
                                required
                                type="text"
                                placeholder="Name"
                                name='name'
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">not valid!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={product.description}
                                required
                                placeholder="Description"
                                name="description"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">not valid!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                value={product.price}
                                type="text"
                                placeholder="email"
                                aria-describedby="inputGroupPrepend"
                                required
                                name="price"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Enter a valid Price.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                value={product.qte}
                                type="text"
                                placeholder="Quantity"
                                required
                                name="qte"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Quantity.
                                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formGridState">
                            <Form.Label>Category</Form.Label>
                            <Form.Control name="category" as="select" onChange={handleChange} custom>
                                <option value="3">cate1</option>
                                <option value="4">TESTC2</option>
                            </Form.Control>
                        </Form.Group>
                        <Card.Footer>
                            <Button variant="outline-success" disabled={showSucces} type="submit">Save</Button>
                            <Button variant="outline-danger" className="ml-2" type="reset">Clean</Button>
                        </Card.Footer>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ProductForm
