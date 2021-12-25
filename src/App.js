import { useEffect } from 'react';
import NavBarSection from './Section/NavBarSection';
import Carousel from './Section/Carousel'
import { Container,Typography} from '@mui/material';
import TopAlert from './Section/TopAlert';
import SectionCardsVideo from './Section/SectionCardsVideo';
import SectionNext from './Section/SectionNext';
import Footer from './Section/Footer';
function App() {
  
  useEffect(()=>{

  },[])
    
 return (
    <div style={styles.container}>
      <TopAlert />
        <NavBarSection />
        <Carousel />
        <Container 
        maxWidth="xl"
         >

        <h2>Let's start learning, Ayoub</h2>
        <SectionCardsVideo />
        <br />
        <br />
        <h1>What to learn next</h1>
        <h2>Recommended for you</h2>
        <SectionNext />
        <Typography variant='subtitle1'>
          Because you wishlisted <span style={{color:'#147369'}} >"How to Draw Dynamic Anatomy - Step by Step"</span>
        </Typography>
        <SectionNext />
        </Container>
        <Footer />
    </div>
  );
}

export default App;

const styles = {
  container:{
    // width: '100vw',
    padding: 0,margin: 0,
    backgroundColor: '#fff'
  }
}
