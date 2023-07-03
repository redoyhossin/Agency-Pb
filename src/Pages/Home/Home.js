import React from 'react';
import Brandinghed from '../Brandinghed/Brandinghed';
import BrandBody from '../BrandBody/BrandBody';
import Brandservices from '../Brandservices/Brandservices';
import Ourwork from '../Ourwork.js/Ourwork';
import { Clientsfeed } from '../Clientsfeed/Clientsfeed';


const Home = () => {
    return (
        <div>
            <Brandinghed />
            <BrandBody />
            <Brandservices />
            <Ourwork />
            <Clientsfeed/>
            
            
        </div>
    );
};

export default Home;