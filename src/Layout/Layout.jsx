import React from 'react';
import Navbar from '../Component/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet className='pt-35'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;