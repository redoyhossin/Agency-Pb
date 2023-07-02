import React from 'react'
import { Box, IconButton } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';



export const Creativecard = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Card sx={{ minWidth: 345, maxWidth: 345, p: 2, borderRadius: '13px' }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="189"
                        image="https://images.unsplash.com/photo-1593789198788-8b21805d5fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
                        alignItems:'center'

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
                </CardActionArea>
            </Card>
        </Box>
    )
}
