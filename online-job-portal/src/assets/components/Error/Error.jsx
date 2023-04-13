import React from 'react';

const Error = () => {
    return (
        <div>
            <div className='py-5 my-5 border-2 d-flex flex-column justify-content-center align-items-center border-warning'>
                <h1 className='pt-5 mt-5'>404 Page not found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default Error;