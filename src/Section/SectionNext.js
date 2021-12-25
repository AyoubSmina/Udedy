import { Container } from '@mui/material'
import React from 'react'
import { SwiperSlide } from 'swiper/react/swiper-slide'
import {Swiper}  from 'swiper/react/swiper'
import { Navigation } from 'swiper';
import {Box} from '@mui/material'
import CardNext from '../Component/CardNext';
import {makeStyles} from '@mui/styles';

const MakerClasses = makeStyles({
    container:{
        marginTop: 16,
        height: 'auto',
        '& .swiper':{
            paddingBottom: '9px',
        },
        '& .swiper-button-next':{
            border:'1px solid #000',
            backgroundColor:'#000',
        },
        '& .swiper-button-prev':{
            border:'1px solid #000',
            backgroundColor:'#000',
        },
        '& .swiper-slide':{
            height: 'auto!important',
        }
    }
})

export default function SectionNext() {
    const List =[
        {title:'Cinematography for 2D Animation Essentials',stitle:'2D Animation 101 Courses',review:4.7,views:1250,price:29.99,img:'src/n1.jpg'},    
        {title:'Concept Art Character Design',stitle:'Hardy Fowler',review:3.5,views:247,price:15.99,img:'src/n2.jpg'},    
        {title:'Anime Academy: Characters and Illustrations',stitle:'Christina Wu/Dubell',review:4.6,views:502,price:88.99,img:'src/n3.jpg'},    
        {title:'Concept Art Architecture',stitle:'Hardy Fowler',review:3.2,views:6250,price:50.99,img:'src/n5.jpg'},    
        {title:'Cinematography for 2D Animation Essentials',stitle:'2D Animation 101 Courses',review:4.4,views:754,price:44,img:'src/n6.jpg'},    
        {title:'Digital Landscapes : Painting Environments with Photoshop',stitle:'Hardy Fowler',review:5,views:50284,price:19.99,img:'src/n4.jpg'},
    ]    

    const classes = MakerClasses();
    return (
        <Box className={classes.container} >
            <Swiper 
                modules={[Navigation]}
                navigation
                spaceBetween={8}
                slidesPerView={2}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 5
                      },
                    450: {
                    slidesPerView: 3,
                    spaceBetween: 5
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 20
                      }
                }}
                >
                {
                    List.map((v)=>
                    <SwiperSlide className={classes.slide}>
                        <CardNext value={v} />
                    </SwiperSlide>)
                }
            </Swiper>
        </Box>
    )
}