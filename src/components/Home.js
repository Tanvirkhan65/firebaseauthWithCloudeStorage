import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import Profile from './Profile';

const Home = () => {
    const { user, logout } = useUserAuth();
    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div>
            <div className="p-4 box mt-3 text-center">
                Hello Welcome <br />
                {user && user.email}
            </div>
            <Profile />
            <div className="d-grid gap-2">
                <Button onClick={handleLogout} variant="primary">
                    Log out
                </Button>
            </div>
        </div>
    );
};

export default Home;
