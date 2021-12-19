import { Container } from '@mui/material'
import React from 'react'
import { SwiperSlide } from 'swiper/react/swiper-slide'
import {Swiper}  from 'swiper/react/swiper'
import { Navigation } from 'swiper';
import CardVideo from '../Component/CardVideo'
import {Box} from '@mui/material'

export default function SectionCardsVideo() {
    const List =[
        {frome:'Blender 3D from zero to hero',numbreSr:'16. Interaction modes',left:'Lecture * 7 left',img:'src/Bv1.jpg'},
        {frome:'Adobe Illustrator Advanced Vector Artwork',numbreSr:'7. Selection',left:'Lecture * 6m left',img:'src/Bv2.jpg'},
        {frome:'From Story to Screen: Producing a Professi...',numbreSr:'1. Introduction',left:'Lecture * 7 1m left',img:'src/Bv3.jpg'},
        {frome:'Blender 3D from zero to hero',numbreSr:'16. Interaction modes',left:'Lecture * 7 left',img:'src/Bv1.jpg'},
        {frome:'Adobe Illustrator Advanced Vector Artwork',numbreSr:'7. Selection',left:'Lecture * 6m left',img:'src/Bv2.jpg'},
        {frome:'From Story to Screen: Producing a Professi...',numbreSr:'1. Introduction',left:'Lecture * 7 1m left',img:'src/Bv3.jpg'},
    ]
    
    return (
        <Box style={styles.container}>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={8}
                slidesPerView={2}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5
                      },
                    450: {
                    slidesPerView: 2,
                    spaceBetween: 8
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 17
                      }
                      
                }}
                >
                {List.map((v)=>
                 <SwiperSlide sx={{}} >
                    <CardVideo value={v} />
                </SwiperSlide>)}
            </Swiper>
        </Box>
    )
}
const styles = {
    container:{
        marginTop: 16,
        height: '125px',
        padding:'0px -10px'
    }
}