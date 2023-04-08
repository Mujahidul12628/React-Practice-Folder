import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div>
            <h1>This is user data</h1>
            <h2>Total user {user.length} </h2>
        </div>
    );
};

export default User;