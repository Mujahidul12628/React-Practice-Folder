import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/about">About</Link>
            <Link to="/user">User</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/post">Post</Link>
            <Link to="/contact">Contact</Link>


            {/* <a href="/about">about</a>
            <a href="/blog">Blog</a>
            <a href="/contact">contact</a> */}

        </nav>
    );
};

export default Header;