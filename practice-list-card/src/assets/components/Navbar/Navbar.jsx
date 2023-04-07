import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false)

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
        <nav>
            <div className='py-2 m-0 md:hidden bg-slate-400' onClick={() => setOpen(!open)}>
                <span>
                    {
                        open === true ?
                            < XMarkIcon className="w-6 h-6 text-black" />
                            : <Bars3Icon className="w-6 h-6 text-black" />
                    }
                </span>
            </div>

            <ul className={`md:flex md:static pl-8 pb-4 bg-slate-400 absolute duration-500 ${open ? 'top-10' : '-top-48'}`}>
                {
                    routes.map(route => {
                        return <Link
                            key={route.id}
                            route={route}
                        ></Link>
                    })
                }
            </ul>


        </nav>
    );
};

export default Navbar;