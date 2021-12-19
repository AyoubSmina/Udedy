import { useEffect } from 'react';
import NavBarSection from './Section/NavBarSection';
import Carousel from './Section/Carousel'
import { Alert,Container} from '@mui/material';
import TopAlert from './Section/TopAlert';
import SectionCardsVideo from './Section/SectionCardsVideo';
import SectionNext from './Section/SectionNext';

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

        <h2>Let's start learning, anas</h2>
        <SectionCardsVideo />
        <br />
        <br />
        <h1>What to learn next</h1>
        <h2>Recommended for you</h2>
        <SectionNext />
        </Container>
        
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
