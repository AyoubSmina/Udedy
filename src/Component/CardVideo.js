import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function CardVideo(props) {
    const {value} = props;
    const theme = useTheme();
    return (
        <Card sx={Styles.card}>
            <Box sx={{ flex: 0.3,display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 100,height:'100%',opacity: '0.8' }}
                    image={value.img}
                    alt="Live from space album cover"
                />
                <IconButton sx={{ position: 'absolute',backgroundColor: '#666' }} >
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column',borderBottom:'10px solid black' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="subtitle1">
                        {value.frome}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        {value.numbreSr}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        {value.left}
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
        border: '.7px solid gray',
        height:'175px',
    }
}