import { Form, Container, Row, Button } from "react-bootstrap";
import Menu from "./Menu";
import Footer from "./Footer";
import { useState } from "react";

const Register = () => {
    const [username, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <Menu />
            <Container>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => { setFirstName(e.target.value) }} placeholder="Enter your firstname"></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => { setSurname(e.target.value) }} placeholder="Enter your surname"></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="userName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => { setUserName(e.target.value) }} placeholder="Enter a username"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => { setFirstName(e.target.value) }} placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                        <Form.Label>Re-enter password</Form.Label>
                        <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Confirm password" />
                    </Form.Group>
                </Form>
            </Container>
            <Footer className='mt-auto' />
        </div>
    )
}

export default Register
