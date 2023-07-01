import { Typography } from '@mui/material';
import React from 'react';

const Servicestitle = ({title,colored}) => {
    return (
        <div>
            <Typography sx={
                {
                    fontSize: '35px',
                    fontWeight: 'bolder',
                    textAlign: 'center',
                    marginY:"0.7rem"
                }
            }>
                {title}{''}
                {colored && (
                    <span style={{color:'#78233f'}}>{colored}

                    </span>
                )}
            </Typography>
            
        </div>
    );
};

export default Servicestitle;