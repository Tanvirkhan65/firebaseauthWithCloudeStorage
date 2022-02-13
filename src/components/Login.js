import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login, googleSignIn } = useUserAuth();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Auth Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Log In
                        </Button>
                    </div>
                </Form>
                <hr />
                <div>
                    <GoogleButton onClick={handleGoogleLogin} className="g-btn" type="dark" />
                </div>
            </div>
            <div className="p-4 box mt-3 text-center">
                <Link to="/signup">Sign up</Link>
            </div>
        </>
    );
};

export default Login;
