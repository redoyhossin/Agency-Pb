import styled from '@emotion/styled';
import { Box, Button, Typography, Stack } from '@mui/material';
import React from 'react';


const Brindrepper = styled(Box)(({ theme }) => ({
    height: '80vh',
    backgroundColor: 'rgba(135, 132, 134, 0.45)',
    clipPath: "polygon(0 1%, 100% 0%, 100% 100%, 0 91%)",
    margin: '2rem 0',
    padding: theme.spacing(4),
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',



}));

const Brandinghed = () => {
    return (
        <div>
            <Brindrepper>
                <Box sx={{
                    marginRight: '50px',
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'block'
                    }

                }}>

                    <img src="https://i.ibb.co/Pzm9RZx/agency-team.png" alt="contain pic" style={{ width: '100%' }} /></Box>


                <Stack spacing={3}>
                    <Typography
                        sx={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            lineHeight: '1.2'
                        }}

                    >Let's code your career!" <br /> captures our dedication to transforming lives</Typography>
                    <Typography>
                        Justo est stet lorem takimata stet. Sit erat <br /> et dolores takimata eos, dolor eirmod dolordolores takimata eos, dolor eirmod dolor.
                    </Typography>
                    <Button sx={{ width: '50%' }} >Hire Us</Button>

                </Stack>
            </Brindrepper>

        </div>
    )
};


export default Brandinghed;