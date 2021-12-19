import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Rating }from '@mui/material'

export default function CardNext(props) {
    const { value } = props;
    return (
        <Card sx={Styles.card}>
        <Box sx={{ flex: 0.4,display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
            <CardMedia
                component="img"
                sx={{ width: '100%',height:'100%',opacity: '0.8' }}
                image={value.img}
                alt="Live from space album cover"
            />
            
        </Box>
        <Box sx={{ display: 'flex', flex:.6,flexDirection: 'column' }}>
            <CardContent sx={{ flex: .2,padding:0,pl:1,pt:1}}>
                <Typography component="div" variant="subtitle1" style={{lineHeight: 1,fontSize:14}}>
                    <strong>
                        {value.title}
                    </strong>
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="div">
                    {value.stitle}
                </Typography>
            </CardContent>
            <Box sx={{ display:'flex',flex:'auto',flexDirection:'row',justifyContent:'start', alignItems: 'center',justifySelf:'flex-end' }}>
            </Box>
            <Box sx={{ display:'flex',flex:'.1',flexDirection:'row',justifyContent:'start', alignItems: 'center',justifySelf:'flex-end',pl:1 }}>
                <Typography variant="caption" color="text.secondary" component="div">
                    {value.review}
                </Typography>
                <Rating name="read-only" size='small' value={value.review} precision={0.2}  readOnly />
                <Typography variant="caption" color="text.secondary" component="div">
                    ({value.views})
                </Typography>
            </Box>
            <Box sx={{ display: 'flex',flex:'.1', justifyContent:'start', alignItems: 'flex-end', pl: 1, pb: 1 }}>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    <strong>
                    {'$'+value.price}
                    </strong>
                </Typography>
            </Box>
        </Box>
    </Card>
    )
}
const Styles = {
    card:{ 
        display: 'flex',
        flex: 1, 
        flexDirection: 'column',
        cursor:'pointer',
        height: '100%',
    }
}