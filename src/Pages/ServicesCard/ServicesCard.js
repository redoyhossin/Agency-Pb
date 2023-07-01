import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const ServicesCard = ({img}) => {
    return (
        <Card sx={{
            maxWidth: 348, pt: 6, boxShadow: 'none', '&:hover':{
            boxShadow:'primary.yellow',
            },mx:'auto'
        }}>
            <CardMedia
                component="img"
                alt="green iguana"
                image={img}
                height={150}
                sx={{
                    width: 'auto',
                    mx:'auto'
                }}
            />
            <CardContent sx={{textAlign:"center"}}>
                <Typography gutterBottom variant="h6" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across
                </Typography>
            </CardContent>
          
        </Card>
    );
};

export default ServicesCard;