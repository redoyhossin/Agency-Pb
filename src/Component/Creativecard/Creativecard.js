import React from 'react'
import { Box, IconButton } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddTaskIcon from '@mui/icons-material/AddTask';



export const Creativecard = ({img}) => {
    return (
        <Box>
            <Card sx={{ minWidth: 345, maxWidth: 345, p: 2, borderRadius: '13px' }}>
                 
                    <CardMedia
                        component="img"
                        height="189"
                        image={img}
                        alt="green iguana"
                        style={{ borderRadius: '12px' }}
                    />
                    <CardContent sx={{
                        p: 0,
                        pt: 2,
                        '&:last-child': {
                            pb: 0,
                        },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'

                    }}>
                        <Box>
                            <Typography gutterBottom variant="body" component="div" color="primary.main" fontWeight={650} fontSize={18}  >
                                Mobile App
                            </Typography>
                            <Typography variant="body2" color="primary.green" fontWeight={450} fontSize={13}>
                                Lizards are a widespread group o, with over 6,000
                            </Typography>
                        </Box>
                        
                            <IconButton sx={{
                                '& svg': {
                                    color: 'primary.main',
                                },
                            }}>
                                <AddTaskIcon />
                            </IconButton>
                    
                    </CardContent>
                
            </Card>
        </Box>
    )
}
