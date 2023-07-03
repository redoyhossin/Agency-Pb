import { Box, Grid } from '@mui/material'
import React from 'react'
import Servicestitle from '../../Component/Servicestitle/Servicestitle'
import { Clientscart } from '../../Component/Clientscart/Clientscart'
import { clientsdata } from '../Clientsdata/Clientsdata'


export const Clientsfeed = () => {
    return (
        <Box>
            <Servicestitle sx={{ my: 3}} title='Clients ' colored='Feedback' />
            <Box>
                <Grid container spacing={4} justifyContent='center'>

                    {
                        clientsdata.map((img, i) => (
                            <Grid item key={i}>
                                <Clientscart img={img} key={i} />
                              
                            </Grid>
                        ))
                    }

                </Grid>


            </Box>

        </Box>
    )
}
