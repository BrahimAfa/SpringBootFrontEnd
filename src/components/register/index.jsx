import React, { useState, useContext } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import ALert from '../alert'
import { save } from '../../services/User'
import { AuthContext } from '../../contexts/authContext';
import Loading from '../loading';
const Register = () => {
    const { isAuth } = useContext(AuthContext)
    const [validated, setValidated] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [errors, setErrors] = useState([]);
    const [showSucces, setShowSucces] = useState(false);
    const [message, setMessage] = useState([]);
    const [user, setUser] = useState({});
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        //chikking the validity of the Register Form
        if (!form.checkValidity()) return setValidated(true);

        const { err, result } = await save(user);
        if (err) {
            console.log(err);
            setShowErr(true);
            let data = err.apiResponse.response ? err.apiResponse.response.data : "Faild To Connect-Try again later"
            setErrors(data.split('-'));
            return;
        }
        else if (result) {
            console.log(result);
            setShowSucces(true);
            setShowErr(false);

            setMessage(["User registred.", "Go login now with your new account."])
        }

    }
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    return (
        <div>
            {
                isAuth ? <Loading to='login' /> :

                    <Container className="mx-auto" style={{ width: "500px" }} >

                        <Card className="mt-4">

                            <ALert message={errors} variant="danger" show={showErr} close={() => setShowErr(false)} />
                            <ALert message={message} variant="success" show={showSucces} close={() => setShowSucces(false)} />

                            <Card.Header> Register</Card.Header>
                            <Card.Body>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Group controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            value={user.fname}
                                            required
                                            type="text"
                                            placeholder="First name"
                                            name='fname'
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">Valid!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            value={user.lname}
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            name="lname"
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">Valid!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="validationCustomUsername">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            value={user.email}
                                            type="email"
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
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            value={user.pass}
                                            type="password"
                                            placeholder="Password"
                                            required
                                            name="password"
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom05">
                                        <Form.Label>Tel</Form.Label>
                                        <Form.Control
                                            value={user.tel}
                                            type="text"
                                            placeholder="Tel"
                                            required
                                            name="tel"
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Phone.
                                </Form.Control.Feedback>
                                    </Form.Group>
                                    <Card.Footer>
                                        <Button variant="outline-success" disabled={showSucces} type="submit">Submit</Button>
                                        <Button variant="outline-danger" className="ml-2" type="reset">Clean</Button>
                                    </Card.Footer>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
            }
        </div >

    );
}

export default Register;