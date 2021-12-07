import React from 'react'
import {Swiper} from 'swiper/react/swiper';
import {SwiperSlide}  from 'swiper/react/swiper-slide';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
  

import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);
  
  
  
  
export default () => {
    const List = [
        {title:'Develop your skills',subtitle:'Learn in-demand programming languages like Python, Java, C++, and more.',img:'src/c2.jpg'},
        {title:'Sale ends today',subtitle:'Have a dream? Start learning your way to it with courses from $11.99.',img:'src/c3.jpg'},
        {title:'Learning that gets you',subtitle:'Skills for your present (and your future). Get started with us.',img:'src/c1.jpg'}
    ]
    return (
    <Swiper
      // install Swiper modules
      modules={[Navigation,Pagination]}
      navigation
      spaceBetween={0} 
      autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} 
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
      style={styles.Swiper}
    >
      {List.map((o)=>
          <SwiperSlide style={styles.SwiperSlide} >
          {
              useMediaQuery(useTheme().breakpoints.up('md'))?
                                    <div style={styles.SwiperCard}>
                                        <h1>{o.title}</h1>
                                        <p>{o.subtitle}</p>
                                    </div>:<></>
          }
            <img src={o.img} style={styles.SwiperImgBack} />
        </SwiperSlide>
      )}
    </Swiper>
  );
};

const styles = {
    Swiper: {
        width: '100vw',
          height: 'max-content',
      }
    ,
    SwiperImgBack:{
        width: '100vw',
        height: 'auto',
        objectFit: 'contain',
        objectPosition: 'initial',

    },SwiperCard:{
        width:'25%',
        height:'35%',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)',
        position: 'absolute',
        left:'8%',
        top:'8%',
        padding: '2%',
        textAlign: 'left',
    }
    ,SwiperSlide: {
        textAlign: 'center',
        /* Center slide text vertically */
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: '-webkit-flex',
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // '-webkit-box-pack': 'center',
        // '-ms-flex-pack': 'center',
        // '-webkit-justify-content': 'center',
        // '-webkit-box-align': 'center',
        // "-ms-flex-align": 'center',
        // '-webkit-align-items': 'center',
      }
      
      
}