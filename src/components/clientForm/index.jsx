import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import ALert from '../alert'
const ClientForm = ({ handleChange, handleSubmit, client, showSucces, validated, showErr, setShowErr, setShowSucces, errorMessage, succesMessage }) => {

    return (
        <Container className="mx-auto" style={{ width: "500px" }} >

            <Card className="mt-4">

                <ALert message={errorMessage} variant="danger" show={showErr} close={() => setShowErr(false)} />
                <ALert message={succesMessage} variant="success" show={showSucces} close={() => setShowSucces(false)} />

                <Card.Header>Add New Client : </Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                value={client.fname}
                                required
                                type="text"
                                placeholder="lirst name"
                                name='fname'
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">not valid!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type='text'
                                value={client.lname}
                                required
                                placeholder="last name"
                                name="lname"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">not valid!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={client.email}
                                type="text"
                                placeholder="email"
                                aria-describedby="inputGroupPrepend"
                                required
                                name="email"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Enter a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>Tele</Form.Label>
                            <Form.Control
                                value={client.tele}
                                type="text"
                                placeholder="tele"
                                required
                                name="tel"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Tele.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formGridState">
                            <Form.Label>Category</Form.Label>
                            <Form.Control name="role" as="select" onChange={handleChange} custom>
                                <option value="3">CLIENT</option>
                                <option value="4">ADMIN</option>
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

export default ClientForm
