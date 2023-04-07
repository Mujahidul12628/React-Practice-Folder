import { list } from 'postcss';
import React from 'react';

const Navbar = () => {
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Products',
            path: '/products'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        }
    ];

    return (
        <div>
            {
                routes.map(route => <li> {route.name} </li>)
            }

        </div>
    );
};

export default Navbar;