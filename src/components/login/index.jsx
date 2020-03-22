
import React, { useState, useContext } from 'react';
import { Form, Button, Col, Container, Card } from 'react-bootstrap';
import ALert from '../alert'
import Loading from '../loading';
import { AuthContext } from '../../contexts/authContext'
const LoginComp = () => {
    const { Login, isAuth, userctx } = useContext(AuthContext)
    //  console.log('USERCTX', val);
    const [validated, setValidated] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [user, setUser] = useState({});
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        //chikking the validity of the Login Form
        console.log(Login, isAuth)
        if (!form.checkValidity()) return setValidated(true);
        await Login(user)
        setShowErr(!isAuth)
    }
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const LoginForm = () => {
        return (
            <Container className="mt-4 mx-auto" style={{ width: "500px" }}>
                <ALert message={["Password or Email are Incorrect"]} variant="danger" show={showErr} close={() => setShowErr(false)} />
                <Card className="mt-4">
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback type="invalid" >Valid!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}

                                />
                                <Form.Control.Feedback type="invalid">Valid!</Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="outline-primary" block type="submit">Login</Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Container>
        )
    }

    return (
        <div className="catalogue" >
            {isAuth ? <Loading to='product' /> : LoginForm()}
        </div>
    );
}

export default LoginComp;