import { Box, Grid, } from '@mui/material';
import React from 'react';
import Servicestitle from '../../Component/Servicestitle/Servicestitle';
import ServicesCard from '../ServicesCard/ServicesCard';

const ServicesImg = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
]

const Brandservices = () => {
    return (
        <Box >
            <Servicestitle
                title='Provide Awesome ' colored='service'
            />

            <Grid container spacing={3}>
                {
                    ServicesImg.map((img, i) =>
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <ServicesCard key={i} img={img} />
                        </Grid>
                    )}

            </Grid>


        </Box>
    );
};

export default Brandservices;