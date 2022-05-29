import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const About = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello {
                        user ? user?.displayName : 'there'
                    }!</h1>
                    <p className="py-6">We are International company. We try to make a product perfectly. Our head Company is in United Sates of America. Our buyers posted some Awesome Review you can see it in review section.</p>
                    <button className="btn btn-primary" disabled>Order Any Product</button>
                </div>
            </div>
        </div>
    );
};

export default About;