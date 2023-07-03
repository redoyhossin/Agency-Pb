import { Box, Grid, IconButton, Tab, Tabs, } from '@mui/material';
import React from 'react';
import Servicestitle from '../../Component/Servicestitle/Servicestitle';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Creativecard } from '../../Component/Creativecard/Creativecard';
import { carddata } from '../Carddata/Carddata';

const Ourwork = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(newValue)
        setValue(newValue);
    };
    return (
        <Box sx={{mb:12}}>

            <Box sx={{ my: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Servicestitle title='Here Are Some Of ' colored='Our Works' sx={{
                        textAlign: 'left',
                    }} />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}>
                        <Tabs
                            sx={{

                                '& .MuiButtonBase-root': {
                                    textTransform: 'capitalize'
                                },
                                '& .Mui-selected': {
                                    color: 'primary.main',
                                    fontWeight: 'bold'
                                }


                            }}
                            value={value} onChange={handleChange} centered>
                            <Tab label="Mobile App" />
                            <Tab label="Web design" />
                            <Tab label="All" />
                        </Tabs>
                        <Box>
                            <IconButton sx={{
                                mr: 2,
                                border: `1px solid #959EAD`
                            }}
                                onClick={() => setValue(value - 1)}
                                disabled={value === 0}
                            >
                                <KeyboardDoubleArrowLeftIcon />
                            </IconButton>
                            <IconButton sx={{
                                border: `1px solid #959EAD`
                            }}
                                onClick={() => setValue(value + 1)}
                                disabled={value === 2}
                            >
                                <KeyboardDoubleArrowRightIcon />
                            </IconButton>

                        </Box>
                    </Box>
                </Box>

            </Box>

            
            <Grid container spacing={4} justifyContent='center'>
                {
                    carddata[value].map((img,i) => (
                        <Grid item key={i}>
                            <Creativecard  img={img}  />
                        </Grid>
                    ))
                }
            </Grid>


        </Box>
    );
};

export default Ourwork;