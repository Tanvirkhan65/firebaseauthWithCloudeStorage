/* eslint-disable import/extensions */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/Signup.js';
import { UserAuthContextProvider } from './context/UserAuthContext';

const App = () => (
    <Container>
        <Row>
            <Col>
                <UserAuthContextProvider>
                    <Routes>
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </UserAuthContextProvider>
            </Col>
        </Row>
    </Container>
);

export default App;
