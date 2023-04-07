import React from 'react';

const Link = ({ route }) => {
    return (
        <div>
            <li className='mt-3 mr-12 hover:bg-slate-600'>
                <a href={route.path}>{route.name}</a>
            </li>

        </div>
    );
};

export default Link;