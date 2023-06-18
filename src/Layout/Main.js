import React from 'react';
import Navber from '../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Container from '@mui/material/Container';
import Header from '../Component/Header/Header';

const Main = () => {
    return (
        <div>
            <Container>
                <Navber></Navber>
                <Outlet />
                <Header/>
                {/* <Footer /> */}
            </Container>
        </div>
    );
};

export default Main;