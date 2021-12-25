import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {CardActionArea,
        Card,
        CardContent,
        CardMedia,
        IconButton,
        Typography,
        Box,
        } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function CardVideo(props) {
    const {value} = props;
    const theme = useTheme();
    return (
        <Card sx={Styles.card}>
            <Box sx={Styles.BoxImage}>
                <CardMedia
                    component="img"
                    sx={{ width: 100,height:'100%',opacity: '0.8' }}
                    image={value.img}
                    alt="Live from space album cover"
                />
                <IconButton sx={Styles.IconStartVedio} >
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
            </Box>
            <CardActionArea sx={Styles.BoxValues}>
                <Box sx={{ flex:'auto',pl:1,pt:1 }}>
                    <Typography component="h1" style={Styles.TextHead} variant="subtitle1">
                        <strong>{value.frome}</strong>
                    </Typography>
                    <Typography variant="subtitle2" 
                                color="text.secondary" component="div"
                                sx={{mt:1}}
                                >
                        {value.numbreSr}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{fontSize:12}} component="div">
                        {value.left}
                    </Typography>
                </Box>
                <Box sx={{borderBottom:'10px solid #258',width:value.breackWatch+'%'}} />
            </CardActionArea>
        </Card>
    )
}

const Styles = {
    card:{ 
        display: 'flex',
        flex: 1,
        border: '.7px solid gray',
        height:'150px',
    },
    BoxImage: {
        flex: 0.3, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    BoxValues:{
        display: 'flex', 
        flexDirection: 'column',
        width:'100%',
        alignItems: 'flex-start',
    },
    TextHead:{
        fontSize:14,
        lineHeight:1
    },
    IconStartVedio:{
        position: 'absolute',
        backgroundColor: '#666', 
    }
}