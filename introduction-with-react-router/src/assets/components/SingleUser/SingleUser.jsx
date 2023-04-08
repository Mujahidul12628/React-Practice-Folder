import React from 'react';
import './sUser.css'
import { Link } from 'react-router-dom';

const SingleUser = ({ singleUser }) => {
    console.log(singleUser);
    const { id, name, phone, email } = singleUser;

    return (
        <div className='Single-User'>
            <h3>Name:{name} </h3>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <p><Link to={`/singleUser/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default SingleUser;