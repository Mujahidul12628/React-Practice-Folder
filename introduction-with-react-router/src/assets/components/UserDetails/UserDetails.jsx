import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)
    return (
        <div>
            <h3>Everything about this user here</h3>
            <h4>Name: {user.name} </h4>
            <p>Phone: {user.phone} </p>
            <p>Email: {user.email} </p>
        </div>
    );
};

export default UserDetails;