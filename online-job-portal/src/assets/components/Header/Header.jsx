import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='header-content'>
            <img src={logo} alt="" />
            <div className="">

                <ActiveLink to="/">Home</ActiveLink>
                {/* <ActiveLink to="/appliedJob">Applied Job</ActiveLink> */}
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/blogs">Blog</ActiveLink>
            </div>
        </nav>
    );
};

export default Header;

