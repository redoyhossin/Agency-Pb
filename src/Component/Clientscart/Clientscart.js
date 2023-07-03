import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

export const Clientscart = ({img}) => {

    return (
        <Box sx={{ mb:12 ,maxWidth:345,minWidth:345 ,p:3,border:'solid 1px' ,boxShadow:'12', borderRadius:'7px' }}>
            <Box  sx={{display:'flex',alignItems:'center', }}>
                <Avatar src={img} />
                <Box sx={{ml:2}}>
                    <Typography sx={{fontWeight:'bold',color:'primary.green'}} variant='h6' >
                        Ninja osu
                    </Typography>

                    <Typography sx={{fontWeight:'bold'}}>
                        Ceo.isd limited
                    </Typography>
                </Box>

            </Box>
            <Typography>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quasi atque autem<br /> voluptate nobis ipsum saepe 
            </Typography>
        </Box>
    )
}
