import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleUser from '../SingleUser/SingleUser';
import './user.css'

const User = () => {
    const user = useLoaderData();
    return (
        <div className='main-container'>
            <h1>This is user data</h1>
            <h2>Total user {user.length} </h2>
            <div className='user-container'>
                {
                    user.map((singleUser, index) => <SingleUser
                        key={index}
                        singleUser={singleUser}
                    ></SingleUser>)
                }
            </div>
        </div>
    );
};

export default User;