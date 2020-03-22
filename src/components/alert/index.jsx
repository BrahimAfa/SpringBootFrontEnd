import React from 'react';
import { Alert } from 'react-bootstrap'
const ALert = (prop) => {
    return (

        <Alert variant={prop.variant} show={prop.show} onClose={prop.close} dismissible>
            <Alert.Heading>{prop.variant === 'danger' ? "Oh snap! You got an error!" : "Successe"}</Alert.Heading>
            {prop.message.map(s => <p>{s}</p>)}
        </Alert>
    );
}

export default ALert;  