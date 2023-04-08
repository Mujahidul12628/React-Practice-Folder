import React from 'react';
import './sUser.css'

const SingleUser = ({ singleUser }) => {
    console.log(singleUser);
    const { id, name, phone, email } = singleUser;

    return (
        <div className='Single-User'>
            <h3>Name:{name} </h3>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>

        </div>
    );
};

export default SingleUser;