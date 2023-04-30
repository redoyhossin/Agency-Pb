import React from 'react';
import Navber from '../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber> 
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;