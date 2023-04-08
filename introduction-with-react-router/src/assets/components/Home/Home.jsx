import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>

            <h1>Home Component</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;