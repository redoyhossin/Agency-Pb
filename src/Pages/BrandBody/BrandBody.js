import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

const brands = [
    'https://i.ibb.co/27wHw8Y/image-5.png',
    'https://i.ibb.co/vVSVd76/image-6.png',
    'https://i.ibb.co/Dwj3KYc/image-7.png',
    'https://i.ibb.co/99gcp3b/image-8.png',
    'https://i.ibb.co/Rhk2VSh/image-9.png',
];

const Brandrepper = styled(Box)(({ theme }) => ({

    marginBottom: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > img': {
        height: '3.2rem',
    },
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        '& > img': {
            marginBottom: '0.6rem',
        },
    },


}));
const BrandBody = () => {
    return <Brandrepper>

        {
            brands.map((brand, i) => <img key={i} src={brand} alt='brand' />)
        }

    </Brandrepper>
};

export default BrandBody;