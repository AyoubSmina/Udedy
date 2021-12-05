import { useEffect } from 'react';
import NavBarSection from './Section/NavBarSection';

function App() {
  
  useEffect(()=>{

  },[])
  
 return (
    <div style={styles.container}>
        <NavBarSection />
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
