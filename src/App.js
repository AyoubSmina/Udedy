import { useEffect } from 'react';
import NavBarSection from './Section/NavBarSection';
import Carousel from './Section/Carousel'
import { Alert } from '@mui/material';
import TopAlert from './Section/TopAlert';


function App() {
  
  useEffect(()=>{

  },[])
    
 return (
    <div style={styles.container}>
      <TopAlert />
        <NavBarSection />
        <Carousel />
    </div>
  );
}

export default App;

const styles = {
  container:{
    width: '100vw',height: '100vh',
    padding: 0,margin: 0,
    backgroundColor: '#ffa'
  }
}
